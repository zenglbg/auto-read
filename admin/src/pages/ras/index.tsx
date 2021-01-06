import ProTable, { ProColumns } from '@ant-design/pro-table';
import React, { useState, useEffect } from 'react';

interface IRasManageProps {}

const RasManage: React.FunctionComponent<IRasManageProps> = (props) => {
  const columns: ProColumns<any>[] = [
    {
      title: '激活码',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '设备码',
      dataIndex: 'deviceKey',
      key: 'deviceKey',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '过期时间',
      dataIndex: 'expired',
      key: 'expired',
    },
    {
      title: '平台',
      dataIndex: 'platform',
      key: 'platform',
    },
    {
      title: '所属用户',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '操作',
      key: 'action',
      dataIndex: 'action',
    },
  ];
  return <ProTable headerTitle="激活码管理" columns={columns} />;
};

export default RasManage;
