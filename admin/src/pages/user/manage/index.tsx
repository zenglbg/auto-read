import React, { useCallback } from 'react';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button, Menu, Dropdown } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
interface IUserManageProps {}
const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);
const UserManage: React.FunctionComponent<IUserManageProps> = (props) => {
  const handleArticle = useCallback(() => {}, []);

  const columns: ProColumns<any>[] = [
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '权限',
      dataIndex: 'role',
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '手机',
      dataIndex: 'phone',
    },
    {
      title: '注册时间',
      dataIndex: 'create_at',
    },
  ];
  return (
    <ProTable
      headerTitle="用户管理"
      rowKey="id"
      pagination={{
        pageSize: 12,
      }}
      columns={columns}
      toolBarRender={() => [
        <a key="btn" onClick={() => handleArticle()}>
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>
        </a>,
        <Dropdown key="menu" overlay={menu}>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};

export default UserManage;
