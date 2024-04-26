import { MenuProps } from 'antd';
import { useState } from 'react';
import {
  BulbOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import DrawerUI from './drawer.presenter';
const MenuDrawer = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [blogCategories, setBlogCategories] = useState();
  const onClick = e => {
    if (e.keyPath.length > 1) {
      router.push(`/${e.keyPath[1]}/${e.keyPath[0]}`);
      setOpen(false)
    }else{
      router.push(e.key);
      setOpen(false)
    }
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
      getItem('2024', '2024', <div>🐲</div>),
      getItem('2023', '2023',<div>🐰</div> ),
      getItem('2022', '2022', <div>🐯</div>),
      getItem('2021', '2021', <div>🐮</div>),
    ]),



    getItem('Blog', 'blog', <FormOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    { type: 'divider' },
    // getItem(
    //   'Contact',
    //   'contact',
    //   null,
    //   [
    //     // getItem('E-mail', 'email', <MailOutlined />),
    //     // getItem('Github', 'github', <GithubOutlined />),
    //   ],
    //   'group'
    // ),
  ];
  return (
    <DrawerUI
      router={router}
      open={open}
      setOpen={setOpen}
      onClickItems={onClick}
      items={items}
    />
  );
};

export default MenuDrawer;
