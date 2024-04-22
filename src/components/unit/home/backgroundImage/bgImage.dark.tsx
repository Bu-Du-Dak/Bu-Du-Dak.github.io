import styled from '@emotion/styled';
import RainFallComponent from '../canvas/rainFall';
import { useEffect, useState } from 'react';

const DarkBackgroundImage = () => {
  const [isLoading,setIsLoading] = useState(true)
  // useEffect(()=>{
  //   setIsLoading(false)
  // },[])
  return (
    // !isLoading &&
    <Background>
        <CoverGlass/>
        <RainFallComponent />
    </Background>
  );
};

const CoverGlass = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  background-image: url('images/view.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;
export default DarkBackgroundImage;
