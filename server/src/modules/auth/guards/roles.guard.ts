import {
  Injectable,
  SetMetadata,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { RedisInstance } from '@modules/database/redis';

export const Roles = (role: number) => SetMetadata('role', role);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  public async canActivate(context: ExecutionContext) {
    const role = this.reflector.get<number[]>('role', context.getHandler());

    if (typeof role === 'number') {
      const request = context.switchToHttp().getRequest();
      const authorization = request['headers'].authorization || void 0;
      const token = authorization.split(' ')[1]; // authorization: Bearer xxx
      if (token) {
        const user = this.jwtService.decode(token) as any;

        // 获取 redis 里缓存的 token
        const redis = await RedisInstance.initRedis(
          'TokenGuard.canActivate',
          0,
        );
        const key = `${user.sub}-${user.userName}`;
        const cache = await redis.get(key);
        if (token !== cache) {
          // 如果 token 不匹配，禁止访问
          throw new UnauthorizedException('您的账号在其他地方登录，请重新登录');
        }

        // console.log(`user, role`, user, role);
        if (user && user.role > role) {
          throw new ForbiddenException('对不起，您无权操作');
        }
      } else {
        // 如果 token 不匹配，禁止访问
        throw new UnauthorizedException('无权限访问');
      }
    }

    return true;
  }
}
