import { BaseEntity } from 'src/model/base.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'history' })
export class History extends BaseEntity {
  @Column({ type: 'integer' })
  taskId: number;

  @Column({ type: 'boolean' })
  alltaskscompleted: boolean;

  @ManyToOne(() => Task, (task) => task.histories)
  task: Task;
}
