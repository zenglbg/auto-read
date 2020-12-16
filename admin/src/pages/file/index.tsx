import { ConnectState } from '@/models/connect';
import { ApiFile } from '@/services/file';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'umi';
import AddFile from './add-file';

interface IFileProps {}

const File: React.FunctionComponent<IFileProps> = (props) => {
  const [visible, setVisible] = useState(true);
  const [files, setFiles] = useState(undefined)
  async function getFiles(params?: any) {
    return ApiFile.getFiles(params).then(({ data, success }) => ({
      success,
      data: data[0],
      total: data[1],
    }));
  }

  const columns: ProColumns<any>[] = [
    {
      title: '文件链接',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: '文件类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '版本',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: '文件名',
      dataIndex: 'filename',
      key: 'filename',
    },
    {
      title: '源文件名',
      dataIndex: 'originalname',
      key: 'originalname',
    },
    {
      title: '操作',
      key: 'action',
      render: (_) => {
        return <a>删除</a>;
      },
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="文件管理"
        rowKey="id"
        request={({ pageSize, current, keyword, ...params }) => {
          // console.log(pageSize, current, keyword, params);
          return ApiFile.getFiles({ pageSize, page: current, ...params }).then((res) => {
            console.log(res)
            if (res.success) {
              setFiles(res.data[0]);
              return {
                data: res.data[0],
                total: res.data[1],
                success: res.success,
              };
            }
            return {
              data: [],
            };
          });
        }}
        dataSource={files}
        columns={columns}
        toolBarRender={() => [
          <Button key="add" type="primary" onClick={() => setVisible(true)}>
            新建
          </Button>,
        ]}
      />
      {/* <AddFile visible={visible} setVisible={setVisible} /> */}
    </>
  );
};

export default File;
