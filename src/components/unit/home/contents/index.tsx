import styled from '@emotion/styled';
import Article from '../../article/article.index';
import { Divider } from '../../../../commons/globalStyles';
import { HOME_TEXT } from '../../../../commons/ContentsText';
import SkillSection from './skillSection';
import WorkSection from './workSection';
import ContactSection from './contactSection';
import EndingSection from './endingSection';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const HomeContents = () => {
  const {theme} = useTheme()
  const [imageOpen,setImageOpen] = useState('')
    const onClickImage = (src) => {
        setImageOpen(src)
    }
  return (
    <>
      {imageOpen &&
        <Lightbox mainSrc={imageOpen} onCloseRequest={()=>{setImageOpen('')}}/>
      }
      <TitleWrapper>Hello, Web!</TitleWrapper>
      <Article text={HOME_TEXT.intro} subContent={<HomeProfileImage src={`${theme === 'dark' ? `${process.env.NEXT_PUBLIC_BUCKET_PATH}/homeProfileDark.jpeg` : `${process.env.NEXT_PUBLIC_BUCKET_PATH}/homeProfileLight.jpeg`}`} onClick={()=>onClickImage(`${theme === 'dark' ? `${process.env.NEXT_PUBLIC_BUCKET_PATH}/homeProfileDark.jpeg` : `${process.env.NEXT_PUBLIC_BUCKET_PATH}/homeProfileLight.jpeg`}`)}/>} />
      <Divider />
      <TitleWrapper>Experience</TitleWrapper>
      <WorkSection />
      <Divider />
      <TitleWrapper>Skills</TitleWrapper>
      <SkillSection />
      <Divider />
      <TitleWrapper>Did you like me ?</TitleWrapper>
      <EndingSection itemArr={HOME_TEXT.end}/>
      <Divider />
      <TitleWrapper>Contact me</TitleWrapper>
      <ContactSection />
    </>
  );
};

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 2rem 0 3rem 0;
  @media (min-width: 768px) {
    text-align: center;
  };
  @media (min-width: 992px) {
    text-align: start;
  };
`;
const HomeProfileImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  @media (min-width: 768px) {
    width: 50%
  };
  @media (min-width: 992px) {
    width:30%
  };
  @media (min-width: 1400px) {
    width: 25%;
  }
`
export default HomeContents;
