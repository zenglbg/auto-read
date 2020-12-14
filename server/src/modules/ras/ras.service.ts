import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';
import { resolve } from 'path';
import { RasEntity } from './models/ras.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { concat, forkJoin, from, of } from 'rxjs';
import { combineAll, concatMap, map } from 'rxjs/operators';
import { UserService } from '@modules/user/user.service';

@Injectable()
export class RasService {
  privateKey: string;
  publicKey: string;
  salt = 'ourjs.com copy right';

  constructor(
    @InjectRepository(RasEntity)
    private readonly rasRepository: Repository<RasEntity>, //
    private readonly userService: UserService,
  ) {
    this.init();
  }

  init() {
    this.privateKey = fs
      .readFileSync(resolve(__dirname, '../../assets/pem/private.pem'))
      .toString();
    this.publicKey = fs
      .readFileSync(resolve(__dirname, '../../assets/pem/public.pem'))
      .toString();
  }

  getRas() {
    var sign = crypto.createSign('SHA256');
    sign.update(this.salt);
    var signature = sign.sign(this.privateKey, 'hex');

    const verify = crypto.createVerify('SHA256');
    verify.write(this.salt);
    verify.end();

    const isVerify = verify.verify(this.publicKey, signature, 'hex');

    const encrypted = crypto.privateEncrypt(
      this.privateKey,
      Buffer.from('endtime:2333-12-03'),
    );
    const decrypted = crypto
      .publicDecrypt(this.publicKey, encrypted)
      .toString();

    return { signature, isVerify, decrypted, encrypted };
  }

  getCryptojs() {
    const s = CryptoJS.AES.encrypt('111', this.privateKey).toString();
    const j = CryptoJS.AES.decrypt(s, this.privateKey).toString(
      CryptoJS.enc.Utf8,
    );
    const s1 = crypto
      .createSign('sha256')
      .sign(this.privateKey)
      .toString();

    return { s, j, s1 };
  }

  getAll(params) {
    const { page = 1, pageSize = 12, ...queryParams } = params;
    const query = this.rasRepository
      .createQueryBuilder('ras')
      .leftJoinAndSelect('ras.user', 'user')
      .orderBy('ras.publishAt', 'DESC');

    query.skip((page - 1) * pageSize);
    query.take(pageSize);

    Object.keys(queryParams).forEach(key => {
      query
        .andWhere(`ras.${key} LIKE :${key}`)
        .setParameter(`${key}`, `%${queryParams[key]}%`);
    });

    return query.getManyAndCount();
  }

  getOne(id: string) {
    return this.rasRepository.findOne(id);
  }

  addRas(ras) {
    const { key, id } = ras;
    return from(this.rasRepository.findOne({ where: { key } })).pipe(
      concatMap(exist => {
        if (exist) {
          throw new HttpException('激活码已存在', HttpStatus.BAD_REQUEST);
        }
        return forkJoin([this.userService.findOne({ id }), of(ras)]).pipe(
          map(([user, _ras]) => {
            const query = this.rasRepository.create({ ...ras, user });
            return this.rasRepository.save(query);
          }),
        );
        // console.log(ras, exist);
        // const query = this.rasRepository.create({ ...ras });
        // return this.rasRepository.save(query);
      }),
    );
  }

  updateRas() {}

  deleteRas() {}
}
