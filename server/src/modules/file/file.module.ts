import { AuthModule } from '@modules/auth/auth.module';
import { SettingModule } from '@modules/setting/setting.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { File } from './models/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([File]), SettingModule, AuthModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
