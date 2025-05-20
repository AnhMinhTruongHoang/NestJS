import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBannerListDto } from './dto/create-banner-list.dto';
import { UpdateBannerListDto } from './dto/update-banner-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Banners, BannersDocument } from './schemas/banner-list.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/user.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class BannerListService {
  constructor(
    @InjectModel(Banners.name)
    private bannersModel: SoftDeleteModel<BannersDocument>,
  ) {}

  create(createBannerListDto: CreateBannerListDto, user: IUser) {
    return this.bannersModel.create({
      ...createBannerListDto,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.bannersModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.bannersModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .select('-password')
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      result, //kết quả query
    };
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Id ${id} not found `);
    }

    return await this.bannersModel.findById(id);
  }

  async update(
    id: string,
    updateBannerListDto: UpdateBannerListDto,
    user: IUser,
  ) {
    return await this.bannersModel.updateOne(
      { _id: id },

      {
        ...updateBannerListDto,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  async remove(id: string, user: IUser) {
    await this.bannersModel.updateOne(
      {
        _id: id,
      },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.bannersModel.softDelete({
      _id: id,
    });
  }
}
