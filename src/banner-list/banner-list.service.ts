import { Injectable } from '@nestjs/common';
import { CreateBannerListDto } from './dto/create-banner-list.dto';
import { UpdateBannerListDto } from './dto/update-banner-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Banners, BannersDocument } from './schemas/banner-list.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';

@Injectable()
export class BannerListService {
  constructor(
    @InjectModel(Banners.name)
    private bannersModel: SoftDeleteModel<BannersDocument>,
  ) {}

  create(createBannerListDto: CreateBannerListDto) {
    return 'This action adds a new bannerList';
  }

  findAll() {
    return `This action returns all bannerList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bannerList`;
  }

  update(id: number, updateBannerListDto: UpdateBannerListDto) {
    return `This action updates a #${id} bannerList`;
  }

  remove(id: number) {
    return `This action removes a #${id} bannerList`;
  }
}
