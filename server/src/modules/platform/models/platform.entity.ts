import { Base } from '@common/entity/base.entity';
import { RasEntity } from '@modules/ras/models/ras.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({
  name: 'platform',
})
export class PlatformEntity extends Base {
  @Column({
    type: 'text',
    comment: '平台名',
  })
  label: string;

  @Column({
    type: 'text',
    comment: '平台值',
  })
  value: string;

  @OneToMany(
    _ => RasEntity,
    ras => ras.platform,
  )
  ras: Array<RasEntity>;
}
