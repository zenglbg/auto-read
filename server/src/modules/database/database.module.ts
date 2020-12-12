import * as path from 'path';
import { Module, DynamicModule } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
export const orm = (): DynamicModule => {
  return TypeOrmModule.forRootAsync({
    useFactory: (config: ConfigService): ConnectionOptions => {
      const envConfig = config.get('_PROCESS_ENV_VALIDATED');
      const databaseConfig = {
        ...config.get('database').ormConfig,
        database: envConfig.DATABASE_DB || 'auto', // 数据库名称
        host: envConfig.DATABASE_HOST || '127.0.0.1', // 数据库地址
        port: Number(envConfig.DATABASE_PORT) || 3306, // 数据库端口
        username: envConfig.DATABASE_USER || 'lerna', // 用户名
        password: envConfig.DATABASE_PWD || 'secret', // 密码
        entities: [
          path.resolve(__dirname, '../../modules/**/**.entity{.ts,.js}'),
        ],
        migrations: [path.resolve(__dirname, './migrations')],
        synchronize: !!Number(envConfig.DATABASE_SYNCHRONIZE),
        logging: !!Number(envConfig.DATABASE_LOGGING),
      }
      console.log(databaseConfig,`databaseConfig`)
      return databaseConfig
    },
    inject: [ConfigService],
  });
};
