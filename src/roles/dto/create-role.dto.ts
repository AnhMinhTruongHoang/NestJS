import {
  IsString,
  IsBoolean,
  IsArray,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty({ message: 'permissions is not empty' })
  @IsArray()
  @IsMongoId({ each: true })
  permissions: mongoose.Schema.Types.ObjectId[];
}
