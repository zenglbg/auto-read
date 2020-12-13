import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

const passModule = PassportModule.register({
  defaultStrategy: 'jwt',
});
const jwtModule = JwtModule.register({
  secret: jwtConstants.secret,
  signOptions: {
    expiresIn: '4h',
  },
});
@Module({
  imports: [forwardRef(() => UserModule), passModule, jwtModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [jwtModule, AuthService],
})
export class AuthModule {
  /**
   * 客户端用户进行登录请求
   * 服务端拿到请求，根据参数查询用户表
   * 若匹配到用户，将用户信息进行签证，并颁发token;
   * 客户端拿到token后，存储在莫一地方，在之后的请求中都带上token
   * 服务端接受到带token的请求后，直接根据签证进行校验，无需要再查询用户信息；
   */
}
