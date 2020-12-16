import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export class ApiLogin {
  static async fakeAccountLogin(params: LoginParamsType) {
    return request('/user/login', {
      method: 'POST',
      data: params,
    });
  }

  static async getFakeCaptcha(mobile: string) {
    return request(`/api/login/captcha?mobile=${mobile}`);
  }
}
