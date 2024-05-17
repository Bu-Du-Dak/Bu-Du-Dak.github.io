import styled from '@emotion/styled';
import Article from '../../article/article.index';
import { Divider } from '../../../../commons/globalStyles';
import { HOME_TEXT } from '../../../../commons/ContentsText';
import SkillSection from './skillSection';
import WorkSection from './workSection';
import ContactSection from './contactSection';
import EndingSection from './endingSection';

const HomeContents = () => {
  return (
    <>
      <TitleWrapper>Hello, Web!</TitleWrapper>
      <Article text={HOME_TEXT.intro} />
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
export default HomeContents;
