import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';

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
  async create(createUserDto: CreateUserDto) {
    const hashPassword = this.getHashPassword(createUserDto.password);
    let user = await this.userModel.create({
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name,
    });

    return user;
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
  }

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    return this.userModel.softDelete({
      _id: id,
    });
  }

  /////////////

  async findAll() {
    return await this.userModel.find({});
  }

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) return 'user not found';

    return this.userModel.findOne({
      _id: id,
    });
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
}
