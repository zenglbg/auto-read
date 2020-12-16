import React, { useCallback, useRef, useState } from 'react';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button, Menu, Dropdown, Tag, Divider, Popconfirm } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { ApiUser } from '@/services/user';
import { getRandomColor, waitTime } from '@/utils/utils';
import dayjs from 'dayjs';
import UserEditor from './user.editor';
import { FormInstance } from 'antd/lib/form';

interface IUserManageProps {}

const UserManage: React.FunctionComponent<IUserManageProps> = (props) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState<{} | undefined>(undefined);
  const ref = useRef<ActionType>();
  const handleArticle = useCallback(() => {
    setUser({
      role: 0,
      status: 'active',
    });
  }, []);
  const delUser = useCallback((id) => {
    ApiUser.del(id);
    ref.current?.reload();
  }, []);
  const reload = useCallback(() => {
    ref.current?.reload();
  }, [ref]);
  const columns: ProColumns<any>[] = [
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '权限',
      dataIndex: 'role',
      key: 'role',
      render: (_, record) => {
        return (
          <Tag color={getRandomColor()}>
            {['超级管理员', '管理员', '开发&运营&测试', '用户'][Number(_)]}
          </Tag>
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '注册时间',
      dataIndex: 'create_at',
      key: 'create_at',
      render: (_, record) => {
        return <div>{dayjs(record.create_at).format('YYYY-MM-DD hh:mm:ss')}</div>;
      },
    },
    {
      title: '操作',
      key: 'action',
      hideInForm: false,
      search: false,
      render: (text, record, _, action) => [
        <a
          key="1"
          onClick={() => {
            setUser(record);
          }}
        >
          编辑
        </a>,
        <Divider key="3" type="vertical" />,
        <Popconfirm
          key="2"
          title="确认删除这个文章"
          onConfirm={() => delUser(record.id)}
          okText="确认"
          cancelText="取消"
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <>
      <ProTable
        headerTitle="用户管理"
        rowKey="id"
        pagination={{
          pageSize: 12,
        }}
        actionRef={ref}
        request={({ pageSize, current, keyword, ...params }) => {
          // console.log(pageSize, current, keyword, params);
          return ApiUser.query({ pageSize, page: current }).then((res) => {
            if (res.success) {
              setUsers(res.data[0]);
              return {
                data: res.data[0],
                total: res.data[1],
                success: res.success,
              };
            } else {
              return {
                data: [],
              };
            }
          });
        }}
        columns={columns}
        dataSource={users}
        // onChange={setUsers}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={handleArticle}>
            新建
          </Button>,
        ]}
      />

      {user && <UserEditor user={user} setUser={setUser} reload={reload} />}
    </>
  );
};

export default UserManage;
