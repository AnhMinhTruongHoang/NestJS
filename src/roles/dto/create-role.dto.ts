import {
  IsString,
  IsBoolean,
  IsArray,
  IsMongoId,
  IsNotEmpty,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'name must not be empty' })
  name: string;

  @IsNotEmpty({ message: 'description must not be empty' })
  description: string;

  @IsNotEmpty({ message: 'isActive must not be empty' })
  @IsBoolean({ message: 'isActive must be a boolean value' })
  isActive: boolean;

  @IsNotEmpty({ message: 'permissions must not be empty' })
  @IsMongoId({
    each: true,
    message: 'each permission must be a Mongo ObjectId',
  })
  @IsArray({ message: 'permissions must be an array' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
