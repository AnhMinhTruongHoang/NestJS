import { PartialType } from '@nestjs/swagger';
import { CreateBannerListDto } from './create-banner-list.dto';

export class UpdateBannerListDto extends PartialType(CreateBannerListDto) {}
