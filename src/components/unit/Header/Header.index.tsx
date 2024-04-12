
import { Wrapper } from './Header.styles';
import HeaderLeftPage from './left/Header.Left';
import HeaderRightPage from './right/Header.right';

const HeaderPage = () => {
  return (
    <Wrapper>
      <HeaderLeftPage />
      <HeaderRightPage />
    </Wrapper>
  );
};
export default HeaderPage;
