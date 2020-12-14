import { IsString, MinLength, MaxLength, IsEnum } from 'class-validator';
import { ApiErrorCode } from '@common/enums/api-error-code.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty()
  @IsString({
    message: '账户必须为字符串',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  @MinLength(2, {
    message: '账户长度不能小于2',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  @MaxLength(10, {
    message: '账户长度不能超过10',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  readonly userName: string;

  @ApiProperty()
  @IsString({
    message: '密码必须为字符串',
    context: { errorCode: ApiErrorCode.USER_PASSWORD_INVALID },
  })
  @MinLength(6, {
    message: '密码长度不能小于6',
    context: { errorCode: ApiErrorCode.USER_PASSWORD_INVALID },
  })
  @MaxLength(30, {
    message: '密码长度不能超过30',
    context: { errorCode: ApiErrorCode.USER_PASSWORD_INVALID },
  })
  readonly password: string;

  
  @ApiPropertyOptional({
    description:
      '[用户角色]: admin-超级管理员 | user-管理员 | test-开发&测试&运营 | guest-普通用户（只能查看）',
  })
  readonly role?: number | string;
}
