import { IsNotEmpty, IsOptional } from 'class-validator';

export class UserRequestDto {
  @IsNotEmpty({
    message: 'Username should not be empty',
  })
  userName: string;

  @IsNotEmpty({
    message: 'Email should not be empty',
  })
  email: string;

  @IsNotEmpty({
    message: 'Password should not be empty',
  })
  password: string;
}

export class UserResponseDto {
  userName: string;
  email: string;
  password: string;
}
