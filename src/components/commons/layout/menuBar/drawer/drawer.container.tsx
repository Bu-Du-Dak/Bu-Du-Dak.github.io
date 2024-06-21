import { MenuProps } from 'antd';
import { useMemo, useState } from 'react';
import { BulbOutlined, FormOutlined, JavaScriptOutlined, PythonOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import DrawerUI from './drawer.presenter';
import axios from 'axios';
const MenuDrawer = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [categories,setCategories] = useState([])
  const onClick = e => {
    if (e.keyPath.length > 1) {
      router.push(`/${e.keyPath[1]}/${e.keyPath[0]}`);
      setOpen(false);
    } else {
      router.push(e.key);
      setOpen(false);
      setOpenKeys([]);
    }
  };
  const getCategoryName = (key:string) => {
    switch(key){
      case 'Python' : return 'Python'
      case 'TypeScript' : return 'JS / TS'
      default : return '전체보기'
    }
  }
  const getCategoryIcon = (key:string) => {
    switch(key){
      case 'Python' : return <PythonOutlined />
      case 'TypeScript' : return <JavaScriptOutlined />
      default : return 
    }
  }
  const getCategories = () => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/category-post-count/`).then(res=>{
      const total = res.data.reduce((sum,item)=> sum+=item.count,0)
      setCategories([{categories:'overall',title:'전체보기',count:total},...res.data])
    })
  }
  const onOpenChange = keys => {
    setOpenKeys(keys);
  };
  useMemo(()=>{getCategories()},[])
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
      getItem('2023', '2023', <div>🐰</div>),
      getItem('2022', '2022', <div>🐯</div>),
      getItem('2021', '2021', <div>🐮</div>),
    ]),

    getItem('Blog', 'blog', <FormOutlined />, 
      // categories.map((e)=>(getItem(`${getCategoryName(e.categories)} (${e.count})`,e.categories, getCategoryIcon(e.categories))))
      categories.map((e)=>(getItem(`${getCategoryName(e.categories)} (${e.count})`,e.categories, getCategoryIcon(e.categories))))
  ),
    { type: 'divider' },
  ];
  return (
    <DrawerUI
      router={router}
      open={open}
      openKeys={openKeys}
      items={items}
      setOpen={setOpen}
      onClickItems={onClick}
      onOpenChange={onOpenChange}
    />
  );
};

export default MenuDrawer;
