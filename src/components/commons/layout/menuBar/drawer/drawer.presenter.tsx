import * as S from './drawer.styles';
import { Drawer, MenuProps } from 'antd';
import { UilBars } from '@iconscout/react-unicons';
import Contact from './contact/contact.container';
import Profile from './profile/profile.container';
import CopyRight from './copyRight/copyRight.container';
import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
interface DrawerUIProps {
  router: NextRouter;
  open: boolean;
  openKeys: string[];
  items: MenuProps['items'];
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClickItems: (e) => void;
  onOpenChange: (e) => void;
}
const DrawerUI = ({
  router,
  open,
  openKeys,
  setOpen,
  items,
  onClickItems,
  onOpenChange,
}: DrawerUIProps) => {
  const main = router.asPath.split('/')[1];
  const sub = router.asPath.split('/')[2]?.split('#')[0];
  return (
    <S.Container>
      <S.Button onClick={() => setOpen(true)}>
        <UilBars size="36" />
      </S.Button>
      <Drawer
        title=""
        open={open}
        onClose={() => setOpen(false)}
        style={{ backgroundColor: `var(--background-color)` }}>
        <Profile />
        <S.MyMenu
          onClick={onClickItems}
          selectedKeys={[main || '/', sub]}
          defaultSelectedKeys={[main || '/', sub]}
          defaultOpenKeys={[main || '/']}
          mode="inline"
          openKeys={openKeys.length === 0 ? [main] : openKeys}
          onOpenChange={onOpenChange}
          items={items}
        />
        <Contact />
        <CopyRight />
      </Drawer>
    </S.Container>
  );
};
export default DrawerUI;
