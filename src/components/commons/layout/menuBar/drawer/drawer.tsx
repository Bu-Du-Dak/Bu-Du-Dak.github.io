import { Drawer, MenuProps } from 'antd';
import { useState } from 'react';
import { UilBars } from '@iconscout/react-unicons';
import {
  BulbOutlined,
  FormOutlined,
  GithubOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';
import * as S from './drawer.styles';
import { useRouter } from 'next/router';
const MenuDrawer = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const onClick = e => {
    router.push(e.key);
  };
  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  };
  const items: MenuProps['items'] = [
    getItem('About Me', '/', <UserOutlined />, null),
    getItem('Works', 'works', <BulbOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
    ]),

    { type: 'divider' },

    getItem('Blog', 'blog', <FormOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),

    getItem(
      'Contact',
      'contact',
      null,
      [
        getItem('E-mail', 'email', <MailOutlined />),
        getItem('Github', 'github', <GithubOutlined />),
      ],
      'group'
    ),
  ];
  return (
    <S.Container>
      <S.Button onClick={() => setOpen(true)}>
        <UilBars size="36" />
      </S.Button>
      <Drawer
        title=""
        open={open}
        onClose={() => setOpen(false)}
        style={{ backgroundColor: `var(--background-color)` }}
      >
        <S.ProfileWrapper>
          <S.ProfileDeco />
          <S.ProfileImage />
        </S.ProfileWrapper>
        {/* <S.TodayCounterWrapper>
        <S.TodayCounterInnerWrapper>
          <SmallText>Total : </SmallText>
          <SmallText>Today : </SmallText>

        </S.TodayCounterInnerWrapper>
      </S.TodayCounterWrapper> */}
        <S.MyMenu
          onClick={onClick}
          defaultSelectedKeys={['aboutMe']}
          defaultOpenKeys={['aboutMe']}
          mode="inline"
          items={items}
        />
      </Drawer>
    </S.Container>
  );
};

export default MenuDrawer;
