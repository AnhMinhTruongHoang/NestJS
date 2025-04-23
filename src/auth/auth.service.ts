import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/user.interface';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import ms from 'ms';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  // username/ pass là 2 tham số thư viện passport nó ném về
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUserName(username);
    if (user) {
      if (!pass) {
        return user;
      }

      const isValid = await this.usersService.isValidPassword(
        pass,
        user.password,
      );
      if (isValid === true) {
        return user;
      }
    }
    return null;
  }

  //auth.service.ts
  async login(user: IUser, response: Response) {
    const { _id, name, email, role } = user;

    const refresh_token = this.createRefreshToken({ name: 'minh' });

    await this.usersService.updateUserToken(refresh_token, _id);

    response.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      maxAge: ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')),
    });

    const payload = {
      sub: 'token login',
      iss: 'from server',
      _id,
      name,
      email,
      role,
    };

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token,
      user: {
        _id,
        name,
        email,
        role,
      },
    };
  }

  async register(user: RegisterUserDto) {
    ////////// paste to user service
    let newUser = await this.usersService.register(user);

    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
  }

  createRefreshToken = (payload: any) => {
    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn:
        ms(this.configService.get<string>('JWT_REFRESH_EXPIRE')) / 1000,
    });
    return refresh_token;
  };

  processNewToken = (refreshToken: string) => {
    try {
      this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });
    } catch (error) {
      throw new BadRequestException(
        "throw new BadRequestException('Refresh token is invalid. Please log in.')",
      );
    }
  };
}
