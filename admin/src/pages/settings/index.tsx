import { ConnectState } from '@/models/connect';
import * as React from 'react';
import { useSelector, useStore } from 'umi';

interface ISettingsProps {}

const Settings: React.FunctionComponent<ISettingsProps> = (props) => {
  const settings = useSelector<ConnectState>((state) => state.settings);
  console.log(settings)
  return <h1>settings</h1>;
};

export default Settings;
