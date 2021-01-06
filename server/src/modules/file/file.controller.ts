import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  Headers,
  UseInterceptors,
  Delete,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '@modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@modules/auth/guards/roles.guard';
import { FileService } from './file.service';

@Controller('file')
@UseGuards(RolesGuard)
export class FileController {
  constructor(private readonly fileService: FileService) {}
  /**
   * 上传文件
   * file
   * @params file
   */
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fieldSize: 50 * 1024 * 1024,
      },
    }),
  )
  @UseGuards(JwtAuthGuard)
  public file(@UploadedFile() file, @Headers('authorization') token) {
    return this.fileService.uploadFile(file, token);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  public getFiles() {
    return this.fileService.getFiles();
  }

  @Delete('del')
  public delFile(@Body() id: string) {
    return this.fileService.delFile(id)
  }
}
