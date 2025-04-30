import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Permission } from 'src/permissions/schemas/permission.schemas';

export type RolesDocument = HydratedDocument<Roles>;

@Schema({ timestamps: true })
export class Roles {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  isActive: boolean;

  @Prop({
    type: [{ type: [mongoose.Schema.Types.ObjectId], ref: Permission.name }],
  })
  permissions: mongoose.Types.ObjectId[];

  @Prop()
  isDeleted: boolean;

  @Prop()
  createdAt: Date;

  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  updatedAt: Date;

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  deletedAt: Date;

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
