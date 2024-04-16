import styled from '@emotion/styled';
import { NormalText } from '../../../../commons/globalStyles';
import MenuDrawer from './drawer/drawer.container';
import { keyframes } from '@emotion/react';

const MenuBar = ({ scrollDirection }) => {
  return (
    <Wrapper scrollDirection={scrollDirection}>
      <div style={{ width: '57px' }} />
      <NormalText>BuDuDak's</NormalText>
      <MenuDrawer />
    </Wrapper>
  );
};
const slideDown = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
`;
const slideUp = keyframes`
    from{
        transform: translateY(0%);
        opacity: 1;
    }
    to{
        transform: translateY(-100%);
        opacity: 0;
    }

`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background-color: var(--background-color);
  opacity: 0.9;
  top: 0;
  position: sticky;
  animation: ${({ scrollDirection }: { scrollDirection: string }) =>
      scrollDirection === 'up' ? slideDown : slideUp}
    0.5s ease-in-out forwards;
`;
export default MenuBar;
