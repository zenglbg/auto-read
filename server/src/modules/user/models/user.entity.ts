import { Column, Entity, BeforeInsert, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { createBcrypt, verifyBcrypt } from '@utils/cryptogram';
import { Base } from '@entity/base.entity';
import { Profile } from '@entity/profile.entity';
import { encryptPassword, makeSalt } from '@common/utils/cryptogram';
import { RasEntity } from '@modules/ras/models/ras.entity';
@Entity({
  name: 'users',
})
export class User extends Base {
  /**
   * 插入数据前，对密码进行加密
   */
  @BeforeInsert()
  encrypt() {
    const salt = makeSalt();
    const hashPwd = encryptPassword(this.password, salt);
    this.password_salt = salt;
    this.password = createBcrypt(hashPwd, 10);
  }

  /**
   * 检测密码是否一致
   * @param password 加密前密码
   * @param repassword 加密后密码
   */
  static async comparePassword(password, repassword) {
    return verifyBcrypt(password, repassword);
  }

  static encryptPassword(password) {
    return createBcrypt(password, 10);
  }

  @Column({ length: 10 })
  userName: string;

  @Exclude()
  @Column({ length: 80 })
  password: string;

  @Exclude()
  @Column({ length: 6 })
  password_salt: string;

  @Column({ length: 500, default: null })
  avatar: string; // 头像

  @Column({ length: 50, default: null })
  email: string; // 邮箱

  @Column({
    type: 'tinyint',
    default: 3,
    comment:
      '用户角色：0-超级管理员|1-管理员|2-开发&测试&运营|3-普通用户（只能查看）',
  })
  role: number; // 用户角色

  @Column('simple-enum', { enum: ['locked', 'active'], default: 'active' })
  status: string; // 用户状态

  @Column({ type: 'text', default: null })
  phone: string;

  @OneToMany(
    _ => RasEntity,
    ras => ras.user,
  )
  ras: Array<RasEntity>;
}
