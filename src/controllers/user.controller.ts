import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserRequestDto } from 'src/dtos/user.dto';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UsersController {
  constructor(private clientService: UserService) {}

  @Post()
  public create(@Body() userDto: UserRequestDto) {
    return this.clientService.create;
  }

  @Get()
  public get() {
    return this.clientService.get();
  }
}
