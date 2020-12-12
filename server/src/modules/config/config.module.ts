import * as Joi from '@hapi/joi';
import { ConfigModule } from '@nestjs/config';
import { resolve } from 'path';
import baseConfig from './base.config';
import databaseConfig from './database.config';

export const configModule = () =>
  ConfigModule.forRoot({
    envFilePath: [
      resolve(__dirname, '../../../.env'),
      resolve(__dirname, '../../../.env.development'),
      resolve(__dirname, '../../../.env.production'),
    ],
    load: [baseConfig, databaseConfig],
    isGlobal: true,
    validationSchema: Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
      PORT: Joi.number().default(3000),
      DATABASE_HOST: Joi.string(),
      DATABASE_PORT: Joi.number().default(3306),
    }),
  });
