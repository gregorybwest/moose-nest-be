import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/item/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  async get() {
    return this.itemRepository.findOne({
      where: { id: 'd9058103-4b28-41c4-aefb-4260ed64552a' },
    });
  }
}
