import { registerAs } from '@nestjs/config';

// 后台路由前缀
export const adminPrefix = '/api';

const customizeConfig = {
  admin: {
    userName: 'admin123',
    password: 'admin123',
  },
  myApp: {
    debug: false, // 是否本地开发环境
    adminPrefix, // 后台路由前缀
  },
};
export default registerAs('base', () => customizeConfig);
