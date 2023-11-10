import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return {
      id: 1,
      createdat: '2023-08-10T03:17:06.374Z',
      updatedat: '2023-08-10T03:17:06.374Z',
      name: 'some task name',
      doses_required: 3,
      doses_given: 1,
    };
  }

  findOne(id: number) {
    return this.taskRepository.findOne({
      where: { id: id },
    });
  }

  addDose(id: number) {
    return this.taskRepository.save({
      id: id,
      doses_given: 2
    })
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
