import { ApiFile } from '@/services/file';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText, ProFormUploadButton } from '@ant-design/pro-form';
import { Button, Upload } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { visible } from 'chalk';
import * as React from 'react';

interface IAddFileProps {
  visible: boolean;
  setVisible: (b: boolean) => void;
}

const AddFile: React.FunctionComponent<IAddFileProps> = ({ visible, setVisible }) => {
  const onFinish = async ({ file }: any) => {
    ApiFile.upload(file[0].originFileObj);
  };

  return (
    <Modal visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
      <ProCard title="添加文件" headerBordered>
        <ProForm layout="horizontal" onFinish={onFinish}>
          <ProFormUploadButton label="文件上传" name="file" />
        </ProForm>
      </ProCard>
    </Modal>
  );
};

export default AddFile;
