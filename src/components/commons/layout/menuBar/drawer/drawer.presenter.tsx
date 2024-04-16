import * as S from './drawer.styles';
import { Drawer } from 'antd';
import { UilBars } from '@iconscout/react-unicons';
import { useTheme } from 'next-themes';
import Contact from './contact/contact.container';
import Profile from './profile/profile.container';
const DrawerUI = ({open,setOpen,items,onClickItems}) => {
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
        <Profile/>




        {/* <S.TodayCounterWrapper>
        <S.TodayCounterInnerWrapper>
          <SmallText>Total : </SmallText>
          <SmallText>Today : </SmallText>

        </S.TodayCounterInnerWrapper>
      </S.TodayCounterWrapper> */}
        <S.MyMenu
          onClick={onClickItems}
          defaultSelectedKeys={['/']}
          defaultOpenKeys={['/']}
          mode="inline"
          items={items}
        />
        <Contact/>
      </Drawer>
    </S.Container>
  );
};
export default DrawerUI;
