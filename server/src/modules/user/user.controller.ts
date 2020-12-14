import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  Request,
  UseGuards,
  Headers,
  HttpException,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard, Roles } from '../auth/guards/roles.guard';
import {
  CreateUserDto,
  UpdateUserDto,
  UpdatePasswordUserDto,
} from './dtos/index.user.dto';
import { Request as Req } from 'express';
import { LoginDto } from './dtos/login.dto';
import { roleConstans } from '@modules/auth/constants';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('testRole')
  // @Roles(roleConstans.SUPER_ADMIN)
  // @UseGuards(JwtAuthGuard)
  // /**
  //  * a
  //  */
  // public testRole(@Body() a) {
  //   return 323232;
  // }

  @Get()
  @Roles(roleConstans.ADMIN)
  @UseGuards(JwtAuthGuard)
  public findAll(@Query() query) {
    return this.userService.findAll(query);
  }

  @Get('currentUser')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  public currentUser(@Headers('authorization') token) {
    console.log(token)
    return this.userService.currentUser(token);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public register(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public login(@Body() user: LoginDto) {
    return this.userService.login(user);
  }

  @Post('update')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  /**
   * update
   *
   */
  public update(@Request() req, @Body() user: UpdateUserDto) {
    return this.userService.updateById(user);
  }

  @Post('xg_password')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  /**
   * password
   */
  public password(@Request() req: Req, @Body() user: UpdatePasswordUserDto) {
    return this.userService.updatePassword(user);
  }


  @Delete('del')
  @Roles(0)
  @UseGuards(JwtAuthGuard)
  public delete(id)
  {
    return this.userService.delete(id)
  }
}
