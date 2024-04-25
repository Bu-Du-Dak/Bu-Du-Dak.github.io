import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import CherryBlossom from '../canvas/flower';

const LightBackgroundImage = () => {
  const [isLoading,setIsLoading] = useState(true)
  // useEffect(()=>{
  //   setIsLoading(false)
  // },[])
  return (
    // !isLoading&&
    <Background>
      <CherryBlossom/>
      <CoverGlass/>
      {/* <div style={{width:'100%',height:'100vh',backgroundColor:'rgba(255,255,255,.5)'}}></div> */}
    {/* <A autoPlay muted preload='auto' aria-hidden loop src="https://tistory3.daumcdn.net/tistory/4939852/skin/images/allLogo.mp4"> */}
    {/* <A autoPlay muted preload='auto' aria-hidden loop src="https://videos.pexels.com/video-files/7539472/7539472-uhd_2160_3840_24fps.mp4">
        <CoverGlass/>
    </A> */}
    </Background>
  );
};

const CoverGlass = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  background-image: url('images/lightView.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(255,255,255,0.9);
`;
const A = styled.video`
overflow: hidden;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  scale:4.5;
  @media (min-width:420px){
  scale: 4;
      }
      @media (min-width: 768px) {
  scale: 3;
      }
      @media (min-width: 992px) {
  scale: 2;
      }
      @media (min-width: 1400px) {
  scale: 1.2;
      }
`
export default LightBackgroundImage;
