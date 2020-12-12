import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl, IRouteComponentProps } from 'umi';

interface IAdminProps extends IRouteComponentProps {}

const Admin: React.FunctionComponent<IAdminProps> = ({ route, children }) => {
  const intl = useIntl();

  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: ' 这个页面只有 admin 权限才能查看',
      })}
    >
      {children}
    </PageHeaderWrapper>
  );
};

export default Admin;

// export default ({route}): React.ReactNode => {
//   const intl = useIntl();
//   const Component = route.component
//   console.log(route)
//   return (

//   );
// };
