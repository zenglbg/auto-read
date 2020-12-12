import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';
import { resolve } from 'path';

@Injectable()
export class RasService {
  privateKey: string;
  publicKey: string;
  salt = 'ourjs.com copy right';

  constructor() {
    this.init();
  }

  init() {
    this.privateKey = fs
      .readFileSync(resolve(__dirname, './pem/private.pem'))
      .toString();
    this.publicKey = fs
      .readFileSync(resolve(__dirname, './pem/public.pem'))
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
}
