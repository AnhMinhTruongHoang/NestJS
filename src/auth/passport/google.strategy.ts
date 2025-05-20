import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get<string>('GOOGLE_SECRET'),
      callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: Function,
  ): Promise<any> {
    const { emails, name, photos } = profile;

    const googleUser = await this.authService.validateGoogleUser(
      {
        email: emails?.[0]?.value,
        name: `${name?.givenName ?? ''} ${name?.familyName ?? ''}`.trim(),
        avatarUrl: photos?.[0]?.value || 'no image',
        password: '',
      },
      this.configService.get<string>('DEFAULT_ROLE_ID'),
    );

    return done(null, googleUser); // ⚠️ Quan trọng!
  }
}
