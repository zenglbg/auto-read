import { ApiFile } from '@/services/file';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormText, ProFormUploadButton } from '@ant-design/pro-form';
import { Button, Upload, Form, Spin } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState, useEffect } from 'react';

interface IAddFileProps {
  visible: boolean;
  setVisible: (b: boolean) => void;
  reload: Function;
}

const AddFile: React.FunctionComponent<IAddFileProps> = ({ visible, setVisible, reload }) => {
  const [form] = Form.useForm();
  const [spin, setSpin] = useState(false);
  const handleReset = () => form.resetFields();

  const onFinish = async ({ file }: any) => {
    setSpin(true);
    ApiFile.upload(file[0].originFileObj).then((res) => {
      setSpin(false);
      setVisible(false);
      handleReset();
      reload();
    });
  };

  return (
    <>
      <Modal visible={visible} onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
        <ProCard title="添加文件" headerBordered>
          <ProForm form={form} layout="horizontal" onFinish={onFinish}>
            <ProFormUploadButton label="文件上传" name="file" />
          </ProForm>
        </ProCard>
      </Modal>
      {spin && <Spin />}
    </>
  );
};

export default AddFile;
