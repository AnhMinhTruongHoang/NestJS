import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { BannerListService } from './banner-list.service';
import { CreateBannerListDto } from './dto/create-banner-list.dto';
import { UpdateBannerListDto } from './dto/update-banner-list.dto';
import { Public, ResponseMessage, Users } from 'src/decorator/customize';
import { IUser } from 'src/users/user.interface';

@Controller('banner-list')
export class BannerListController {
  constructor(private readonly bannerListService: BannerListService) {}

  @Post()
  create(
    @Body() createBannerListDto: CreateBannerListDto,
    @Users() user: IUser,
  ) {
    return this.bannerListService.create(createBannerListDto, user);
  }

  @Get()
  @Public()
  @ResponseMessage('Fetch List banner Success !')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.bannerListService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @Public()
  @ResponseMessage('Fetch job List by id !')
  findOne(@Param('id') id: string) {
    return this.bannerListService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBannerListDto: UpdateBannerListDto,
    @Users() user: IUser,
  ) {
    return this.bannerListService.update(id, updateBannerListDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Users() user: IUser) {
    return this.bannerListService.remove(id, user);
  }
}
