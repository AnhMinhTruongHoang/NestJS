import { IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  name: string;

  @IsString()
  apiPath: string;

  @IsString()
  method: string;

  @IsString()
  module: string;
}
