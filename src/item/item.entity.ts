// item.entity.ts
import { BaseEntity } from 'src/model/base.entity';
import {
  Column,
  Entity
} from 'typeorm';



@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

}