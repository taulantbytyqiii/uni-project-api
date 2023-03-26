import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UserRequestDto } from 'src/dtos/user.dto';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async create(userDto: UserRequestDto) {
    const user = await this.userModel.create(userDto);
    return user;
  }

  public async get() {
    return 'asdsad';
  }
}
