import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { configService } from './config.service';

const SnakeNamingStrategy =
  require('typeorm-naming-strategies').SnakeNamingStrategy;

export const AppDataSource = new DataSource({
    ...configService.getTypeOrmConfig(),
    // namingStrategy: new SnakeNamingStrategy(),
} as DataSourceOptions);
