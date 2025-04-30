import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, PermissionsSchema } from './schemas/permission.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Permission.name, schema: PermissionsSchema },
    ]),
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
