import { Module } from '@nestjs/common';
import { DatabasesService } from './databases.service';
import { DatabasesController } from './databases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';

import { UsersService } from 'src/users/users.service';
import { Roles, RolesSchema } from 'src/roles/schemas/role.schemas';
import {
  Permission,
  PermissionsSchema,
} from 'src/permissions/schemas/permission.schemas';

@Module({
  controllers: [DatabasesController],
  providers: [DatabasesService, UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Permission.name, schema: PermissionsSchema },
      { name: Roles.name, schema: RolesSchema },
    ]),
  ],
})
export class DatabasesModule {}
