import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { configService } from './config.service';

export const AppDataSource = new DataSource({
    ...configService.getTypeOrmConfig(),
    migrationsRun: true,
} as DataSourceOptions);
