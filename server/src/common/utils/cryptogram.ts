import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

/**
 * make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

/**
 * Encrypt password
 * @param password 密码
 * @param salt 密码盐
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return '';
  }
  const tempSalt = Buffer.from(salt, 'base64');
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  );
}



/**
 * bcrypt 加密
 *
 * @param {string} value 需要加密的值
 * @param {number} salt 加密的强度 0 - 12
 *
 * @returns string
 */
export function createBcrypt(value: string, salt = 10): string {
  return bcrypt.hashSync(value, bcrypt.genSaltSync(salt));
}

/**
 * 比对输入值与已加密值是否一致
 *
 * @param {string} value 输入值
 * @param {string} hash 已加密的 hash 值
 *
 * @returns boolean
 */
export function verifyBcrypt(value: string, hash: string): boolean {
  return bcrypt.compareSync(value, hash);
}
