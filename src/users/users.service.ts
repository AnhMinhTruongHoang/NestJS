import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './user.interface';
import { Users } from 'src/decorator/customize';
import aqp from 'api-query-params';

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,
    private configService: ConfigService,
  ) {}

  async onModuleInit() {
    const existingUser = await this.userModel.findOne({
      email: 'adminfb@gmail.com',
    });
    if (!existingUser) {
      const plainPassword =
        this.configService.get<string>('INIT_USER_PASSWORD') || '123456';

      const salt = genSaltSync(10);
      const hash = hashSync(plainPassword, salt);

      await this.userModel.insertMany([
        {
          name: 'Erip',
          email: 'adminfb@gmail.com',
          password: hash,
        },
      ]);
    }
  }

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
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
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
    const { filter, sort, projection, population } = aqp(qs);

    delete filter.page;
    delete filter.limit;

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
      .select('-password'); /// not return password when call
  }

  findOneByUserName(username: string) {
    return this.userModel.findOne({
      email: username,
    });
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
      role: 'USER',
    });

    return newRegister;
  }

  updateUserToken = async (refreshToken: string, _id: string) => {
    ///update user token
    return await this.userModel.updateOne({ _id }, { refreshToken });
  };
}
