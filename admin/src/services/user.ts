import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/user');
}

export async function queryCurrent(): Promise<any> {
  return request('/user/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

export function register(user: any) {
  return request.post('/user/register', {
    data: user,
  });
}

export function update(user: any) {
  return request.post('/user/update', {
    data: user,
  });
}

export function del(id: string) {
  return request.delete('/user/del', {
    data: id,
  });
}
