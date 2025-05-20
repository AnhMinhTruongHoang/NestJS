import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBannerListDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
