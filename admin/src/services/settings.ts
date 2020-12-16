import request from '@/utils/request';

export class ApiSetting {
  static getSetting(params: any) {
    return request('/setting/get');
  }

  static update(settings: any) {
    return request.post('/setting', {
      data: settings,
    });
  }
}
