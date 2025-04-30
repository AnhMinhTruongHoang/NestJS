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
import { PermissionsService } from './permissions.service';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ResponseMessage, Users } from 'src/decorator/customize';
import { IUser } from 'src/users/user.interface';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ResponseMessage('Create a new permission')
  create(
    @Body() createPermissionDto: CreatePermissionDto,
    @Users() user: IUser,
  ) {
    return this.permissionsService.create(createPermissionDto, user);
  }

  @Get()
  @ResponseMessage('Fetch Resume with paginate')
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() qs: string,
  ) {
    return this.permissionsService.findAll(+currentPage, +limit, qs);
  }

  @Get(':id')
  @ResponseMessage('Get Permission by Id')
  findOne(@Param('id') id: string) {
    return this.permissionsService.findOne(id);
  }

  @Patch(':id')
  @ResponseMessage('Update New resume')
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
    @Users() user: IUser,
  ) {
    return this.permissionsService.update(id, updatePermissionDto, user);
  }

  @Delete(':id')
  @ResponseMessage('Delete permission by Id')
  remove(@Param('id') id: string, @Users() user: IUser) {
    return this.permissionsService.remove(id, user);
  }
}
