import { SettingService } from '@modules/setting/setting.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as OSS from 'ali-oss';
import { concat, from, of } from 'rxjs';
import * as dayjs from 'dayjs';
import { concatMap } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { File } from './models/file.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileService {
  client: OSS;
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    private readonly settingService: SettingService,
    private readonly configService: ConfigService,
  ) {
    this.init();
  }

  init() {
    const {
      OSS_REGION,
      OSS_ACCESSKEYID,
      OSS_ACCESSKEYSECRET,
      OSS_BUCKET,
      OSS_SECURE,
    } = this.configService.get('_PROCESS_ENV_VALIDATED');
    this.client = new OSS({
      region: OSS_REGION,
      accessKeyId: OSS_ACCESSKEYID,
      accessKeySecret: OSS_ACCESSKEYSECRET,
      bucket: OSS_BUCKET,
      secure: !!Number(OSS_SECURE),
    });
  }

  uploadFile(file: any, token) {
    const { originalname, mimetype, size, buffer } = file;
    const filename = `/${dayjs().format('YYYY-MM-DD')}/${originalname}`;
    return from(this.fileRepository.findOne({ where: { filename } })).pipe(
      concatMap(fileexist => {
        console.log(fileexist, `console.log(file) `);
        const version = 0;

        return from(this.client.put(originalname, buffer)).pipe(
          concatMap(({ url }) => {
            const setting = this.fileRepository.create({
              originalname,
              filename,
              url,
              type: mimetype,
              size,
              version,
            });
            if (fileexist) {
              return this.fileRepository
                .createQueryBuilder()
                .update(File)
                .set(setting)
                .where('id = :id', { id: fileexist.id })
                .execute();
            } else {
              return this.fileRepository.save(setting);
            }
          }),
        );
      }),
    );
  }

  getFiles() {
    return this.fileRepository.findAndCount();
  }

  delFile(id: string) {
    return from(this.fileRepository.findOne(id)).pipe(
      concatMap(file => {
        return this.client
          .delete(file.filename)
          .then(_ => this.fileRepository.remove(file));
      }),
    );
  }
}
