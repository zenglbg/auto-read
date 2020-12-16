import request from '@/utils/request';

export class ApiUser {
  static async query(params: any): Promise<any> {
    return request('/user', {
      params,
    });
  }

  static async queryCurrent(): Promise<any> {
    return request('/user/currentUser');
  }

  static async queryNotices(): Promise<any> {
    return request('/api/notices');
  }

  static register(user: any) {
    return request.post('/user/register', {
      data: user,
    });
  }

  static update(user: any) {
    return request.post('/user/update', {
      data: user,
    });
  }

  static del(id: string) {
    return request.delete('/user/del', {
      data: id,
    });
  }
}
