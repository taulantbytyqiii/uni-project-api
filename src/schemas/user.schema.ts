import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  collection: 'Users',
  timestamps: true,
  autoIndex: true,
  versionKey: false,
})
export class User {
  @Prop({ required: true, unique: true, minlength: 3, maxlength: 20 })
  userName: string;

  @Prop({
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
  })
  email: string;

  @Prop({ required: true, trim: true, minlength: 6, maxlength: 30 })
  password: string;

  @Prop({ maxlength: 160 })
  bio: string;

  @Prop({ default: 'asdadasd' })
  avatarUrl: string;

  @Prop({})
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'User';
    },
  ];

  @Prop({})
  following: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'User';
    },
  ];
}

export type UserDocument = mongoose.HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
