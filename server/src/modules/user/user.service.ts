import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '../../common/exceptions/api.exception';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';
import { from, throwError, Observable, of, concat, combineLatest } from 'rxjs';
import {
  switchMap,
  mergeMap,
  merge,
  map,
  concatAll,
  catchError,
  concatMap,
} from 'rxjs/operators';

import { User } from './models/user.entity';
import { CreateUserDto, UpdatePasswordUserDto } from './dtos/index.user.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '@modules/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {
    this.init();
  }

  public init() {
    const { userName, password } = this.configService.get('base').admin;

    this.addUser({
      userName,
      password,
      role: 0,
    }).subscribe(
      function next(_) {
        console.log(
          `管理员账户创建成功，用户名：${userName}，密码：${password}，请及时登录系统修改默认密码`,
        );
      },
      function error(_) {
        console.log(
          `管理员账户已经存在，用户名：${userName}，密码：${password}，请及时登录系统修改默认密码`,
        );
      },
    );
  }

  public findAll(queryParams: any = {}): Observable<[User[], number]> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .orderBy('user.createAt', 'DESC');

    const { page = 1, pageSize = 12, status, ...otherParams } = queryParams;

    query.skip((+page - 1) * +pageSize);
    query.take(+pageSize);

    if (status) {
      query.andWhere('user.status=:status').setParameter('status', status);
    }

    if (otherParams) {
      Object.keys(otherParams).forEach(key => {
        query
          .andWhere(`user.${key} LIKE :${key}`)
          .setParameter(`${key}`, `%${otherParams[key]}%`);
      });
    }
    return from(query.getManyAndCount());
  }

  /**
   * 创建用户
   * @param user
   */
  public createUser(user: any) {
    const { password, repassword } = user;
    if (password !== repassword) {
      // throw new HttpException('两次密码输入不一致', HttpStatus.BAD_REQUEST);
      return {
        code: 400,
        msg: '两次密码输入不一致',
      };
    }
    return this.addUser(user);
  }

  public addUser(user: any) {
    const { userName } = user;
    return from(this.userRepository.findOne({ where: { userName } })).pipe(
      concatMap(existUser => {
        if (existUser) {
          throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);
        }
        delete user.repassword;
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
      }),
      catchError(err => {
        return throwError(err);
      }),
    );
  }

  /**
   * 登录
   * @param user
   * 此无法没有catchError, 必须再下游捕获错误。
   */
  public login(user: any) {
    const { userName, password } = user;
    console.log('JWT验证 - Step 1: 用户请求登录');
    return this.authService.validateUser(userName, password).pipe(
      switchMap(({ code, user }) => {
        switch (code) {
          case 0:
            throw new HttpException(
              `用户已锁定，无法登录`,
              HttpStatus.BAD_REQUEST,
            );
          case 1:
            const result = this.authService.certificate(user);
            return result;
          case 2:
            throw new HttpException(`密码错误`, HttpStatus.BAD_REQUEST);
          default:
            throw new HttpException(`用户不存在`, HttpStatus.BAD_REQUEST);
        }
      }),
    );
  }

  /**
   * findByid
   */
  public findByid(id) {
    return from(this.userRepository.findOne(id));
  }

  public currentUser(token) {
    const { id } = this.jwtService.decode(token) as Partial<User>;
    return this.userRepository.findOne(id);
  }

  public findOne(where: any) {
    return this.userRepository.findOne({ where });
  }

  /**
   * updateById
   * 更新指定用户
   */
  public updateById(user: Partial<User>) {
    const { id } = user;
    return from(this.userRepository.findOne(id)).pipe(
      switchMap(oldUser => {
        delete user.password;

        const newUser = this.userRepository.merge(oldUser, user);

        return from(this.userRepository.save(newUser));
      }),
    );
  }

  /**
   * updatePassword
   * 升级密码
   */
  public updatePassword(user: UpdatePasswordUserDto) {
    const { id, oldPassword, newPassword } = user;
    return from(this.userRepository.findOne(id)).pipe(
      switchMap(existUser => {
        if (!existUser) {
          throw new HttpException(
            '用户不存在',
            // tslint:disable-next-line: trailing-comma
            HttpStatus.BAD_REQUEST,
          );
        }
        return combineLatest([
          from(User.comparePassword(oldPassword, existUser.password)),
          of(existUser),
        ]);
      }),
      switchMap(([isSame, existUser]) => {
        if (!isSame) {
          throw new HttpException(
            '旧密码不正确',
            // tslint:disable-next-line: trailing-comma
            HttpStatus.BAD_REQUEST,
          );
        }

        const hashNewPassword = User.encryptPassword(newPassword);

        const newUser = this.userRepository.merge(existUser, {
          password: hashNewPassword,
        });
        return from(this.userRepository.save(newUser));
      }),
      catchError(err => of(err)),
    );
  }
}
