import styled from '@emotion/styled';
import { useState } from 'react';

const LightBackgroundImage = () => {
  const [isLoading,setIsLoading] = useState(true)
  return (
    // !isLoading&&
    <Background>
      <CoverGlass/>
    </Background>
  );
};

const CoverGlass = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  background-image: url('/images/lightView.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export default LightBackgroundImage;
