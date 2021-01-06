import React, { useState } from 'react';
import { EditableProTable, ProColumns } from '@ant-design/pro-table';
import { Divider, Popconfirm, Tag, Avatar } from 'antd';
import ProField from '@ant-design/pro-field';
import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import dayjs from 'dayjs';
import { query, register, update } from '@/services/user';
import { getRandomColor } from '@/utils/utils';

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<IUser[]>([]);
  const [position, setPosition] = useState<'top' | 'end'>('end');
  const [newRecord, setNewRecord] = useState({
    id: (Math.random() * 1000000).toFixed(0),
  });

  const delUser = (id) => {};

  const columns: ProColumns<any>[] = [
    {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '用户名不能为空',
          },
        ],
      },
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, record) => {
        return <Avatar size="small" src={record.avatar} alt="avatar" />;
      },
    },
    {
      title: '权限',
      dataIndex: 'role',
      key: 'role',
      valueEnum: {
        0: { text: '超级管理员', status: 'Default' },
        1: { text: '管理员', status: 'Default' },
        2: { text: '开发&测试&运营', status: 'Default' },
        3: { text: '客户', status: 'Default' },
      },
      render(_) {
        return <Tag color={getRandomColor()}>{_}</Tag>;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      valueEnum: {
        active: { text: '激活', status: 'Success' },
        locked: { text: '锁定', status: 'Error' },
      },
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
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action.startEditable?.(record.id);
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
      <EditableProTable
        rowKey="id"
        headerTitle="可编辑表格"
        recordCreatorProps={{
          position,
          record: newRecord,
        }}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'end',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={({ pageSize, current, keyword, ...params }) => {
          // console.log(pageSize, current, keyword, params);
          return query().then((res) => {
            if (res.success) {
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
        value={dataSource}
        onChange={setDataSource}
        editable={{
          editableKeys,
          onSave: async (key, row, newLine) => {
            console.log(key, row, newLine);

            if (String(key).length > 10) {
              const res = await update(row);
              setNewRecord({
                id: (Math.random() * 1000000).toFixed(0),
              });
            } else {
              const res = await register(row);
              setNewRecord({
                id: res.id,
              });
            }
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProField
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};
