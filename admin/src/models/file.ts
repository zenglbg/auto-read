import { ApiFile } from '@/services/file';
import { Effect, Reducer } from 'umi';

export interface IFile {
  originalname: string;
  filename: string;
  type: string;
  size: string;
  url: string;
}

export interface IFileType {
  files?: IFile[];
  file?: IFile;
}

export interface FileModelType {
  namespace: string;
  state: IFileType;
  effects: {
    getFiles: Effect;
  };
  reducers: {
    setFiles: Reducer;
  };
}

const Model: FileModelType = {
  namespace: 'file',
  state: {},
  effects: {
    *getFiles({ payload }, { call, fork, put }) {
      const res = yield call(ApiFile.getFiles, payload);
      console.log(res)
    },
  },
  reducers: {
    setFiles() {},
  },
};

export default Model;
