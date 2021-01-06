import ProCard from '@ant-design/pro-card';
import { Modal } from 'antd';
import { ProFormSelect, ProFormText, StepsForm } from '@ant-design/pro-form';
import * as React from 'react';
import { ApiUser } from '@/services/user';

interface IUserEditorProps {
  reload: Function;
  user: any;
  setUser: (params: any) => void;
}

const UserEditor: React.FunctionComponent<IUserEditorProps> = ({ user, setUser, reload }) => {
  const onFinish = async (values: any) => {
    if (user.id) {
      const res = await ApiUser.update({ ...values, id: user.id });
    } else {
      const res = await ApiUser.register(values);
    }
    setUser(undefined);
    reload();
  };
  console.log(user, user.id);
  return (
    <Modal visible onCancel={() => setUser(undefined)}>
      <ProCard title="编辑用户" headerBordered>
        <StepsForm onFinish={onFinish}>
          <StepsForm.StepForm
            title="账户信息"
            onFinish={async () => {
              return true;
            }}
            initialValues={user}
            layout="horizontal"
          >
            <ProFormText
              labelAlign="left"
              label="用户名"
              width="m"
              name="userName"
              rules={[
                {
                  required: true,
                  message: '用户名不能为空',
                },
                {
                  min: 6,
                  message: '用户名长度不能少于6',
                },
              ]}
            />
            <ProFormText
              label="头像"
              name="avatar"
              rules={[
                {
                  type: 'url',
                  message: '头像为图片链接',
                },
              ]}
            />
            <ProFormSelect
              label="权限"
              name="role"
              options={[
                { label: '超级管理员', value: 0 },
                { label: '管理员', value: 1 },
                { label: '开发&运营&测试', value: 2 },
                { label: '客户', value: 3 },
              ]}
            />
            <ProFormSelect
              label="状态"
              name="status"
              options={[
                {
                  value: 'active',
                  label: '激活',
                },
                {
                  value: 'locked',
                  label: '锁定',
                },
              ]}
            />
          </StepsForm.StepForm>

          {user.id ? null : (
            <StepsForm.StepForm title="密码">
              <ProFormText.Password
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                  {
                    min: 6,
                    message: '密码长度不能少于6',
                  },
                ]}
              />
              <ProFormText.Password
                label="确认密码"
                name="repassword"
                initialValue={user.password}
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: '密码不能为空',
                  },
                  {
                    min: 6,
                    message: '密码长度不能少于6',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('您输入的两个密码不匹配');
                    },
                  }),
                ]}
              />
            </StepsForm.StepForm>
          )}
        </StepsForm>
      </ProCard>
    </Modal>
  );
};

export default UserEditor;
