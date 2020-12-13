import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(userName: string, password: string) {
    return this.authService.validateUser(userName, password).pipe(
      map(({ code, user }) => {
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
      }),
    );
  }
}
