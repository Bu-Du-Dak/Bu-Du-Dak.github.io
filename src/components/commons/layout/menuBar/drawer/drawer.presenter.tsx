import * as S from './drawer.styles';
import { Drawer } from 'antd';
import { UilBars } from '@iconscout/react-unicons';
import Contact from './contact/contact.container';
import Profile from './profile/profile.container';
import CopyRight from './copyRight/copyRight.container';
const DrawerUI = ({router,open,setOpen,items,onClickItems}) => {
  const main = (router.asPath.split('/')[1])
  const sub = (router.asPath.split('/')[2])

  return (
    <S.Container>
      <S.Button onClick={() => setOpen(true)}>
        <UilBars size="36" />
      </S.Button>
      <Drawer
        title=""
        open={open}
        onClose={() => setOpen(false)}
        style={{backgroundColor: `var(--background-color)` }}>
        <Profile/>
        <S.MyMenu
          onClick={onClickItems}
          defaultSelectedKeys={[main||'/',sub]}
          defaultOpenKeys={[main||'/']}
          mode="inline"
          items={items}
        />
        <Contact/>
        <CopyRight/>
      </Drawer>
    </S.Container>
  );
};
export default DrawerUI;
