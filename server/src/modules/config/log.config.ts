import { registerAs } from '@nestjs/config';
import { log4jsConfig } from '@common/config/log';

export default registerAs('log4config', () => log4jsConfig);
