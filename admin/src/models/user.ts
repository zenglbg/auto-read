import { Effect, Reducer } from 'umi';

import { ApiUser } from '@/services/user';
import { setAuthority } from '@/utils/authority';
import { message } from 'antd';

export interface CurrentUser {
  avatar?: string;
  userName?: string;
  title?: string;
  group?: string;
  signature?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  id?: string;
  unreadCount?: number;
}

export interface UserModelState {
  currentUser?: CurrentUser;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    changeNotifyCount: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(ApiUser.query);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(ApiUser.queryCurrent);
      let payload = undefined;
      if (response.success) {
        payload = response.data;
      }
      if (response.msg) {
        message.error(response.msg);
      }
      yield put({
        type: 'saveCurrentUser',
        payload,
      });
    },
  },

  reducers: {
    saveCurrentUser(state, { payload }) {
      setAuthority(payload.role);
      return {
        ...state,
        currentUser: payload || {},
      };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};

export default UserModel;
