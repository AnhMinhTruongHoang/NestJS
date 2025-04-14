import { IsEmail, IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: "Email can't be empty",
  })
  @IsEmail()
  email: string;

  username?: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  password: string;

  name?: string;

  age?: number;

  phone?: number;

  address?: string;
}
