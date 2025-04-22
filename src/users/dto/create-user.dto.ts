import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

class Company {
  //////////// validate {}
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  name: string;
}

export class CreateUserDto {
  @IsNotEmpty({
    message: "Email can't be empty",
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  password: string;

  @IsNotEmpty({ message: "Name mustn't empty" })
  name?: string;

  @IsNotEmpty({ message: "Age mustn't empty" })
  age?: number;

  @IsNotEmpty({ message: "Gender mustn't empty" })
  gender?: string;

  phone?: number;

  @IsNotEmpty({ message: "Address mustn't empty" })
  address?: string;

  @IsNotEmpty({ message: "Role mustn't empty" })
  role: string;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company; //// {} type valid
}

///////////// register vail

export class RegisterUserDto {
  @IsNotEmpty({ message: "Name mustn't empty" })
  name?: string;

  @IsNotEmpty({
    message: "Email can't be empty",
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  password: string;

  @IsNotEmpty({ message: "Age mustn't empty" })
  age?: number;

  @IsNotEmpty({ message: "Gender mustn't empty" })
  gender?: string;

  @IsNotEmpty({ message: "Address mustn't empty" })
  address?: string;

  phone?: number;
}
