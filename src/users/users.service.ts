import { BadRequestException, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './user.interface';
import { Users } from 'src/decorator/customize';
import aqp from 'api-query-params';
import { USER_ROLE } from 'src/databases/sample';
import { Roles, RolesDocument } from 'src/roles/schemas/role.schemas';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,

    @InjectModel(Roles.name)
    private roleModel: SoftDeleteModel<RolesDocument>,
  ) {}

  getHashPassword = (plain: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync('B4c0//', salt);
    return hash;
    // Store hash in your password DB
  };

  ////////////// crud
  async create(createUserDto: CreateUserDto, @Users() users: IUser) {
    const { name, email, password, age, gender, address, role, company } =
      createUserDto;

    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(`The Email ${email} existing`);
    } ///////// check gmail

    const hashPassword = this.getHashPassword(password);

    let NewUser = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role,
      company,
      createdBy: {
        _id: users._id,
        email: users.email,
      },
    });

    return NewUser;
  }

  async update(updateUserDto: UpdateUserDto, @Users() users: IUser) {
    const updated = await this.userModel.updateOne(
      { _id: updateUserDto._id },
      {
        ...updateUserDto,
        updatedBy: {
          _id: users._id,
          email: users.email,
        },
      },
    );
    return updated;
  }

  async remove(id: string, users: IUser) {
    ///admin@gmail.com def admin
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }

    const foundUser = await this.userModel.findById(id);

    if (foundUser.email === 'admin@gmail.com') {
      throw new BadRequestException("Can't delete admin");
    }

    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: users._id,
          email: users.email,
        },
      },
    );
    return this.userModel.softDelete({
      _id: id,
    });
  }

  /////////////
  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population } = aqp(qs);

    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
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
    if (!mongoose.Types.ObjectId.isValid(id)) return 'user not found';

    return this.userModel
      .findOne({
        _id: id,
      })
      .select('-password') /// not return password when call
      .populate({ path: 'role', select: { name: 1, _id: 1 } });
  }

  findOneByUserName(username: string) {
    return this.userModel
      .findOne({
        email: username,
      })
      .populate({ path: 'role', select: { name: 1 } });
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  ///////////// register from auth service

  async register(user: RegisterUserDto) {
    const { name, email, password, age, gender, address } = user;
    const userRole = await this.roleModel.findOne({ name: USER_ROLE }); /// get role from role servives
    const hashPassword = this.getHashPassword(password);

    const isExist = await this.userModel.findOne({ email });
    if (isExist) {
      throw new BadRequestException(`The Email ${email} existing`);
    } ///////// check gmail

    let newRegister = await this.userModel.create({
      name,
      email,
      password: hashPassword,
      age,
      gender,
      address,
      role: userRole?._id,
    });

    return newRegister;
  }

  updateUserToken = async (refreshToken: string, _id: string) => {
    ///update user token
    return await this.userModel.updateOne({ _id }, { refreshToken });
  };

  findUserByToken = async (refreshToken: string) => {
    ///update user token
    return await this.userModel.findOne({ refreshToken }).populate({
      path: 'role',
      select: { name: 1 },
    });
  };
}
