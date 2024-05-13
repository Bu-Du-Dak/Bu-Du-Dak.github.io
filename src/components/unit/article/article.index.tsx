import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import { SubTitle } from '../../../commons/globalStyles';

const Article = ({
  text,
  title,
  subContent,
  reverse,
}: {
  text: string;
  title?: string;
  subContent?: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <ArticleWrapper reverse={reverse}>
      {subContent && subContent}
      <Contents subContent={subContent}>
        {title && <SubTitle>{title}</SubTitle>}
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
      </Contents>
    </ArticleWrapper>
  );
};
interface ArticleStyleProps {
  reverse?: boolean;
  subContent?: JSX.Element;
}
const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  padding: 1rem 0;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    flex-direction: ${({ reverse }: ArticleStyleProps) =>
      !reverse ? 'row' : 'row-reverse'};
  }
  @media (min-width: 1400px) {
    flex-direction: ${({ reverse }) => (!reverse ? 'row' : 'row-reverse')};
  }
`;
const Contents = styled.div`
  width: 100%;
  line-height: 2;
  font-size: 1rem;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  @media (min-width: 992px) {
    width: ${({ subContent }: ArticleStyleProps) =>
      subContent ? '60%' : '100%'};
  }
  @media (min-width: 1400px) {
    width: ${({ subContent }) => (subContent ? '70%' : '100%')};
  }
`;
export default Article;
