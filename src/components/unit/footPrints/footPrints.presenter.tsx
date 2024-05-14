import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { StackChips, StackWrapper } from '../works/works.styles';
import { CHIP_STYLES, SmallText } from '../../../commons/globalStyles';
import * as S from './footPrints.styles'
const FootPrintsUI = ({ title,routeEvent, contents }) => {
  return (
    <S.Wrapper>
      {title ? (
        <S.Title>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{title}</ReactMarkdown>
        </S.Title>
      ) : (
        <div style={{ minWidth: '300px'}} />
      )}
      <S.Contents>
        <S.ContentTitle>{contents.contentTitle}</S.ContentTitle>
        <S.SubContents style={{display:'flex', alignItems:'end',gap:'.5rem', margin: '.5rem 0 1.5rem 0' }}>
          {contents.period}
          {routeEvent&&
          <SmallText onClick={routeEvent} style={{color:'var(--selected-text-color)',cursor:'pointer'}}>자세히 보기</SmallText>
          }
        </S.SubContents>
        <S.SubContentsTitle>Description</S.SubContentsTitle>
        <S.SubContents>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{contents.description}</ReactMarkdown>
        </S.SubContents>
        <S.SubContentsTitle>My Work</S.SubContentsTitle>
        <S.SubContents>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {contents.myWorks}
          </ReactMarkdown>
        </S.SubContents>
        <S.SubContentsTitle style={{ marginBottom: '0' }}>Stack</S.SubContentsTitle>
        <StackWrapper style={{ justifyContent: 'start' }}>
          {contents.stacks?.map(e => (
            <StackChips
              key={e}
              backgroundColor={CHIP_STYLES[e]?.backgroundColor}
              color={CHIP_STYLES[e]?.color}>
              {e}
            </StackChips>
          ))}
        </StackWrapper>
      </S.Contents>
    </S.Wrapper>
  );
};
export default FootPrintsUI;
