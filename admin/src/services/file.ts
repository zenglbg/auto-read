import request from '@/utils/request';

export class ApiFile {
  static upload(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return request.post('/file/upload', {
      data: formData,
    });
  }

  static getFiles(params: Object) {
    return request('/file', { params });
  }

  static delFile(id: string) {
    return request.delete('/file/del', { body: id });
  }
}
