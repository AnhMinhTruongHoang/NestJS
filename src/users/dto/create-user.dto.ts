import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: "Email can't be empty",
  })
  @IsEmail()
  email: string;

  @IsEmpty()
  password: string;

  name?: string;

  age?: number;

  phone?: number;

  address?: string;
}
