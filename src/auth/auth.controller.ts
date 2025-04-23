import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { Public, ResponseMessage, Users } from 'src/decorator/customize';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { Request, Response } from 'express';
import { IUser } from 'src/users/user.interface';
import { request } from 'http';
import { use } from 'passport';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  //////////// login
  @Public()
  @UseGuards(LocalAuthGuard)
  @ResponseMessage('User login')
  @Post('/login')
  handleLogin(
    @Req() req,
    @Res({ passthrough: true })
    response: Response,
  ) {
    return this.authService.login(req.user, response);
  }

  //////////// logout
  @ResponseMessage('User logout')
  @Post('/logout')
  handleLogout(
    @Res({ passthrough: true })
    response: Response,
    @Users() user: IUser,
  ) {
    return this.authService.logout(response, user);
  }

  /////////////// register
  @Public()
  @ResponseMessage('Register a new user !')
  @Post('/register')
  handleRegister(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  ////////////// get account
  @ResponseMessage('Get user information')
  @Get('/account')
  handleGetAccount(@Users() user: IUser) {
    return { user };
  }

  ////////////// Refresh token
  @Public()
  @ResponseMessage('Get user refresh_token')
  @Get('/refresh')
  handleGetRefreshToken(
    @Req() request: Request,
    @Res({ passthrough: true })
    response: Response,
  ) {
    const refreshToken = request.cookies['refresh_token'];
    return this.authService.processNewToken(refreshToken, response);
  }
}
