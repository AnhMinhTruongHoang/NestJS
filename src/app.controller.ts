import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  handleLogin(@Request() req: any) {
    return req.user;
  }
}
