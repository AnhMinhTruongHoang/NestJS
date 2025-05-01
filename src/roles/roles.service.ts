import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Roles, RolesDocument } from './schemas/role.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/users/user.interface';
import mongoose from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles.name)
    private rolesModel: SoftDeleteModel<RolesDocument>,
    private configService: ConfigService,
  ) {}

  async create(createRoleDto: CreateRoleDto, user: IUser) {
    const { name, description, isActive, permissions } = createRoleDto;

    const isExist = await this.rolesModel.findOne({ name });
    if (isExist) {
      throw new BadRequestException(
        `Role with name = ${name} , method=${name} already exists`,
      );
    }

    const newRole = this.rolesModel.create({
      name,
      description,
      isActive,
      permissions,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return newRole;
  }

  async update(_id: string, updateRoleDto: UpdateRoleDto, user: IUser) {
    const { name, description, isActive, permissions } = updateRoleDto;

    if (!mongoose.Types.ObjectId.isValid(name)) {
      throw new BadRequestException('Role not found');
    }
    const updated = await this.rolesModel.updateOne(
      { _id },
      {
        name,
        description,
        isActive,
        permissions,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return updated;
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'ID not found ';
    }

    await this.rolesModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.rolesModel.softDelete({
      _id: id,
    });
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.rolesModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.rolesModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
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
    if (!mongoose.Types.ObjectId.isValid(id)) return 'Role not found';

    return (await this.rolesModel.findById(id)).populate({
      path: 'permissions',
      select: { _id: 1, apiPath: 1, name: 1, method: 1 },
    });
  }
}
