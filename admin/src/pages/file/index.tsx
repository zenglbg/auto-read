import { ConnectState } from '@/models/connect';
import { ApiFile } from '@/services/file';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import AddFile from './add-file';

interface IFileProps {}

const File: React.FunctionComponent<IFileProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const [files, setFiles] = useState(undefined);
  const ref = useRef<ActionType>();
  async function getFiles({ pageSize, page: current, ...params }: any) {
    return ApiFile.getFiles({ pageSize, page: current, ...params }).then((res) => {
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
  }
  function delFile(id: string) {
    ApiFile.delFile(id).then((res) => {
      reload();
    });
  }
  function reload() {
    ref.current?.reload();
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
      render: (_, record) => {
        return (
          <a
            onClick={() => {
              delFile(record.id);
              reload();
            }}
          >
            删除
          </a>
        );
      },
    },
  ];
  return (
    <>
      <ProTable
        headerTitle="文件管理"
        rowKey="id"
        request={getFiles}
        actionRef={ref}
        dataSource={files}
        columns={columns}
        toolBarRender={() => [
          <Button key="add" type="primary" onClick={() => setVisible(true)}>
            新建
          </Button>,
        ]}
      />
      <AddFile visible={visible} setVisible={setVisible} reload={reload} />
    </>
  );
};

export default File;
