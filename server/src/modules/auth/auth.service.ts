import { verifyBcrypt } from '@common/utils/cryptogram';
import { encryptPassword } from '@common/utils/cryptogram';
import { UserService } from '@modules/user/user.service';
import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { RedisInstance } from '@modules/database/redis';
@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  // JWT验证 - Step 2: 校验用户信息
  public validateUser(userName: string, password: string) {
    console.log('JWT验证 - Step 2: 校验用户信息');
    return from(this.userService.findOne({ userName })).pipe(
      map(user => {
        if (user) {
          if (user.status === 'locked') {
            return {
              code: 0,
              user: null,
            };
          }
          const hashedPassword = user.password;
          const salt = user.password_salt;
          const hashPassword = encryptPassword(password, salt);
          if (verifyBcrypt(hashPassword, hashedPassword)) {
            return {
              // 密码正确
              code: 1,
              user,
            };
          } else {
            // 密码错误
            return {
              code: 2,
              user: null,
            };
          }
        } else {
          // 查无此人
          return {
            code: 3,
            user: null,
          };
        }
      }),
    );
  }

  public async certificate(user: any) {
    /**
     * JWT验证 - Step 3: 处理 jwt 签证
     */
    const { userName, id, role } = user;
    const payload = {
      userName,
      sub: id,
      role,
    };
    console.log('JWT验证 - Step 3: 处理 jwt 签证', payload);

    try {
      const token = this.jwtService.sign(payload);
      // 实例化 redis
      const redis = await RedisInstance.initRedis('auth.certificate', 0);
      // 将用户信息和 token 存入 redis，并设置失效时间，语法：[key, seconds, value]
      await redis.setex(`${id}-${userName}`, 300, `${token}`);
      return token;
    } catch (error) {
      console.log(`注册token 发生了错误`, error);
      // return {
      //   code: 600,
      //   msg: `账号或密码错误`,
      // };
      throw new UnauthorizedException('账号或密码错误');
    }
  }

  public decodeToken(authorization: string) {
    const token = authorization.split(' ')[1]; // authorization: Bearer xxx
    return this.jwtService.decode(token);
  }
}
