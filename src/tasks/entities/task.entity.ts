import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'task' })
export class Task extends BaseEntity {
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'integer' })
  doses_required: number;

  @Column({ type: 'integer' })
  doses_given: number;
  histories: any;
}
