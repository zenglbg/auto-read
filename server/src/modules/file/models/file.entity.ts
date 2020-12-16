import { Base } from '@common/entity/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class File extends Base {
  @Column()
  originalname: string;

  @Column()
  filename: string;

  @Column()
  type: string;

  @Column()
  size: string;

  @Column()
  url: string;

  @Column({ type: 'int', default: 0, comment: '文件版本' })
  version: number;
}
