import styled from '@emotion/styled';
import Article from '../../article/article.index';
import {
  DashedDivider,
  Divider,
  NormalText,
} from '../../../../commons/globalStyles';
import FootPrints from '../../footPrints/footPrints.container';
import { HOME_TEXT } from '../../../../commons/ContentsText';
import { useRouter } from 'next/router';
import Contact from '../../../commons/layout/menuBar/drawer/contact/contact.container';

const HomeContents = () => {
  const router = useRouter();
  const onClickMove = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <TitleWrapper>Hello, Web!</TitleWrapper>
      <Article text={HOME_TEXT.intro} />
      <Divider />
      <TitleWrapper>Experience</TitleWrapper>
      <FootPrints
        title={HOME_TEXT.title_2023}
        routeEvent={() => onClickMove('/works/2023#nzt')}
        contents={{
          contentTitle: 'NZT - Net Zero Tracker',
          period: '2023.05 ~ 현재',
          description: HOME_TEXT.description_2023,
          myWorks: HOME_TEXT.myWorks_2023,
          stacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Axios',
            'graphQL',
            'Docker',
            'Jest',
            'emotion',
          ],
        }}
      />
      <DashedDivider />
      <FootPrints
        title={HOME_TEXT.title_2022}
        routeEvent={() => onClickMove('/works/2022#webRTC')}
        contents={{
          contentTitle: '실시간 화상형 코드 에디터',
          period: '2022.09 ~ 2022.12',
          description: HOME_TEXT.description_2022_1,
          myWorks: HOME_TEXT.myWorks_2022_1,
          stacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Axios',
            'socketIO',
            'monacoEditor',
            'agoraRTC',
            'emotion',
          ],
        }}
      />
      <FootPrints
        routeEvent={() => onClickMove('/works/2022#dingco')}
        contents={{
          contentTitle: '온라인 강의 서비스 딩코',
          period: '2022.04 ~ 2022.07',
          description: HOME_TEXT.description_2022_2,
          myWorks: HOME_TEXT.myWorks_2022_2,
          stacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Axios',
            'graphQL',
            'Docker',
            'recoil',
            'emotion',
          ],
        }}
      />
      <FootPrints
        routeEvent={() => onClickMove('/works/2022#bootCamp')}
        contents={{
          contentTitle: '온라인 부트캠프',
          period: '2021.12 ~ 2022.07',
          description: HOME_TEXT.description_2022_3,
          myWorks: HOME_TEXT.myWorks_2022_3,
          stacks: [
            'TypeScript',
            'React',
            'Next.js',
            'Axios',
            'graphQL',
            'Docker',
            'contextAPI',
            'emotion',
          ],
        }}
      />
      <DashedDivider />
      <FootPrints
        title={HOME_TEXT.title_personal}
        contents={{
          contentTitle: '포트폴리오 / 블로그',
          period: '2024.04 ~ 현재',
          description: HOME_TEXT.description_personal_1,
          myWorks: HOME_TEXT.myWorks_personal_1,
          stacks: [
            'Python',
            'django',
            'TypeScript',
            'React',
            'Next.js',
            'emotion',
          ],
        }}
      />
      <FootPrints
        routeEvent={() => onClickMove('/works/2021#native')}
        contents={{
          contentTitle: '산책가까',
          period: '2021.08 ~ 2021.09',
          description: HOME_TEXT.description_personal_2,
          myWorks: HOME_TEXT.myWorks_personal_2,
          stacks: ['TypeScript', 'ReactNative', 'graphQL', 'emotion'],
        }}
      />
      <Divider />
      <TitleWrapper>Skills</TitleWrapper>
      <Article text={HOME_TEXT.skills_web} />
      <Article text={HOME_TEXT.skills_typescript} />
      <Article text={HOME_TEXT.skills_react} />
      <Article text={HOME_TEXT.skills_devOps} />
      <Divider />
      <TitleWrapper>Did you like me ?</TitleWrapper>
      <Article text={HOME_TEXT.end} />
      <Divider />
      <TitleWrapper>Contact me</TitleWrapper>
      <NormalText>기다릴게요!</NormalText>
      <NormalText style={{ paddingBottom: '2rem' }}>
        언제든 괜찮으니 부담없이 연락주세요!
      </NormalText>
      <Contact noTitle />
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
  }
  @media (min-width: 992px) {
    text-align: start;
  }
`;
export default HomeContents;
