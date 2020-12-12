import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  MaxLength,
  IsUUID,
  IsNumber,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsUUID('all', { message: 'id不能为空' })
  readonly id: number;
}
