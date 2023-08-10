import { BaseEntity } from 'src/model/base.entity';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @Column({ type: 'integer' })
  doses_required: number;

  @Column({ type: 'integer' })
  doses_given: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;
}
