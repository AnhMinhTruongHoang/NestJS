import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
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
  @IsMongoId({ message: "Role mustn't mongo ID" })
  role: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company; //// {} type valid
}

///////////// register valid

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

//create-user.dto
export class UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'anhminh', description: 'username' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '123456',
    description: 'password',
  })
  readonly password: string;
}

/////// google login
export class LoginWithGoogleDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
