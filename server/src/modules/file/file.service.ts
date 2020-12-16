import { SettingService } from '@modules/setting/setting.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as OSS from 'ali-oss';
import { concat, from, of } from 'rxjs';
import * as dayjs from 'dayjs';
import { concatMap } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { File } from './models/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    private readonly settingService: SettingService,
  ) {}

  uploadFile(file: any, token) {
    const { originalname, mimetype, size, buffer } = file;
    const filename = `/${dayjs().format('YYYY-MM-DD')}/${originalname}`;
    return from(this.fileRepository.findOne({ where: { filename } })).pipe(
      concatMap(file => {
        console.log(file, `console.log(file) `);
        // const version = file ? file.version + 1 : file['version'];
        const version = 0;

        return this.settingService.findAll(true, token).pipe(
          concatMap(
            ({
              ossRegion = 'oss-cn-shenzhen',
              ossAccessKeyId = 'LTAI4G8swDpt9RaCEj6GG1V9',
              ossBucket = 'zenglbg-auto',
              ossAccessKeySecret = 'o5z68fEraDkZajuNswPo6sr0R3kKvb',
              ossHttps = true,
            }) => {
              // if (
              //   !ossRegion ||
              //   !ossAccessKeyId ||
              //   !ossBucket ||
              //   !ossAccessKeySecret
              // ) {
              //   throw new HttpException(
              //     '请完善 OSS 配置',
              //     HttpStatus.BAD_REQUEST,
              //   );
              // }

              console.log(
                111111111,
                ossRegion,
                ossAccessKeyId,
                ossBucket,
                ossAccessKeySecret,
                ossHttps,
              );

              const client = new OSS({
                region: ossRegion,
                accessKeyId: ossAccessKeyId,
                accessKeySecret: ossAccessKeySecret,
                bucket: ossBucket,
                secure: ossHttps,
              });

              return client.put(originalname, buffer).then(({ url }) => {
                return this.fileRepository.create({
                  originalname,
                  filename,
                  url,
                  type: mimetype,
                  size,
                  version,
                });
              });
            },
          ),
          concatMap(setting => this.fileRepository.save(setting)),
        );
      }),
    );
    // return from(this.fileRepository.findOne({ where: { filename } })).pipe(
    //   concatMap(file => {
    //     console.log(file);
    //     if (file) {
    //       throw new HttpException('文件已存在！', HttpStatus.BAD_REQUEST);
    //     }
    //     return this.settingService.findAll(true);
    //   }),
    //   concatMap(
    //     ({
    //       ossRegion = 'oss-cn-shenzhen.aliyuncs.com',
    //       ossAccessKeyId = 'LTAI4G8swDpt9RaCEj6GG1V9',
    //       ossBucket = 'zenglbg-auto',
    //       ossAccessKeySecret = 'o5z68fEraDkZajuNswPo6sr0R3kKvb',
    //       ossHttps = true,
    //     }) => {
    //       if (
    //         !ossRegion ||
    //         !ossAccessKeyId ||
    //         !ossBucket ||
    //         !ossAccessKeySecret
    //       ) {
    //         throw new HttpException('请完善 OSS 配置', HttpStatus.BAD_REQUEST);
    //       }
    //       const client = new OSS({
    //         region: ossRegion,
    //         accessKeyId: ossAccessKeyId,
    //         accessKeySecret: ossAccessKeySecret,
    //         bucket: ossBucket,
    //         secure: ossHttps,
    //       });

    //       return client.put(filename, buffer).then(({ url }) => {
    //         return this.fileRepository.create({
    //           originalname,
    //           filename,
    //           url,
    //           type: mimetype,
    //           size,
    //         });
    //       });
    //     },
    //   ),
    //   concatMap(setting => this.fileRepository.save(setting)),
    // );
  }

  getFiles() {
    return this.fileRepository.findAndCount();
  }
}
