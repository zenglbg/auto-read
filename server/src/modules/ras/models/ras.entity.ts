import { Base } from '@common/entity/base.entity';
import { PlatformEntity } from '@modules/platform/models/platform.entity';
import { User } from '@modules/user/models/user.entity';
import * as dayjs from 'dayjs';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({
  name: 'ras_table',
})
export class RasEntity extends Base {
  @Column({
    comment: '激活码',
  })
  key: string;

  @Column({
    comment: '设备激活码',
  })
  deviceKey: string;

  @Column({
    comment: '备注',
    nullable: true,
  })
  remark: string;

  @Column({
    type: 'simple-enum',
    comment: '平台',
    enum: [0, 1, 2, 3],
    default: 0,
  })
  status: number;

  @Column({
    type: 'datetime',
    comment: '过期时间',
    default: dayjs().format(),
  })
  expired: Date;

  @ManyToOne(
    _ => PlatformEntity,
    platform => platform.ras,
    {
      cascade: true,
    },
  )
  platform: PlatformEntity;


  @ManyToOne(
    _ => User,
    user => user.ras,
    {
      cascade: true,
    },
  )
  user: User;
}
