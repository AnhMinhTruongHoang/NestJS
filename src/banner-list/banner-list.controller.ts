import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannerListService } from './banner-list.service';
import { CreateBannerListDto } from './dto/create-banner-list.dto';
import { UpdateBannerListDto } from './dto/update-banner-list.dto';

@Controller('banner-list')
export class BannerListController {
  constructor(private readonly bannerListService: BannerListService) {}

  @Post()
  create(@Body() createBannerListDto: CreateBannerListDto) {
    return this.bannerListService.create(createBannerListDto);
  }

  @Get()
  findAll() {
    return this.bannerListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannerListDto: UpdateBannerListDto) {
    return this.bannerListService.update(+id, updateBannerListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerListService.remove(+id);
  }
}
