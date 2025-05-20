import { Module } from '@nestjs/common';
import { BannerListService } from './banner-list.service';
import { BannerListController } from './banner-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Banners, BannersSchema } from './schemas/banner-list.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Banners.name, schema: BannersSchema }]),
  ],
  controllers: [BannerListController],
  providers: [BannerListService],
})
export class BannerListModule {}
