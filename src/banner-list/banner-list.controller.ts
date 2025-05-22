import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { BannerListService } from './banner-list.service';
import { CreateBannerListDto } from './dto/create-banner-list.dto';
import { UpdateBannerListDto } from './dto/update-banner-list.dto';
import { Public, ResponseMessage, Users } from 'src/decorator/customize';
import { IUser } from 'src/users/user.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('banner-list')
export class BannerListController {
  constructor(private readonly bannerListService: BannerListService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads/banners',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `banner-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
  )
  @Public()
  async uploadBanner(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new Error('File not provided');
    return {
      imageUrl: `/uploads/banners/${file.filename}`,
    };
  }
  ////////////////
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
