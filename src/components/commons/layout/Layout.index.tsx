import { useTheme } from 'next-themes';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { Container } from '../../../commons/globalStyles';
import { Body, LayoutWrapper, ThemeBtn } from './Layout.styles';
import MenuBar from './menuBar/menuBar';
import LayoutHeader from './header/LayoutHeader';
const Layout = props => {
  const { theme, setTheme } = useTheme();
  const onClickChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <>
      <MenuBar />
      <Container>
        <LayoutWrapper>
          <LayoutHeader />
          <Body className="container">{props.children}</Body>
          <ThemeBtn theme={theme} onClick={onClickChangeTheme}>
            {theme === 'dark' ? <UilSun /> : <UilMoon />}
          </ThemeBtn>
        </LayoutWrapper>
      </Container>
    </>
  );
};
export default Layout;
