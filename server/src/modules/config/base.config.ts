import { registerAs } from '@nestjs/config';

// 后台路由前缀
export const adminPrefix = '/api';

export const redisBaseConfig = {
  host: process.env.redisHost || '192.168.43.144',
  port: process.env.redisPort || 6379,
  password: '',
  db: 1,
};
const customizeConfig = {
  admin: {
    name: 'admin',
    password: 'admin',
  },
  myApp: {
    debug: false, // 是否本地开发环境
    adminPrefix, // 后台路由前缀
  },
};
export default registerAs('base', () => customizeConfig);
