import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import { SmallText } from '../../../commons/globalStyles';

const ImageBox = ({
  width,
  height,
  imagePath,
  description
}: {
  width: string;
  height: string;
  imagePath: string;
  description?:string
}) => {
  return (
  <Wrapper width={width}>
    <Image width={width} height={height} imagePath={imagePath} />
    {description&&<ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>}
  </Wrapper>
  )
};
const Wrapper = styled.div<{width:string}>`
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  color: gray;
  font-size:.8rem;
`

const Image = styled.div<{
  width: string;
  height: string;
  imagePath: string;
}>`
  width: 100%;
  height: ${props => props.height};
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 0.1px solid var(--selected-text-color);
  border-radius: 1rem;
`;
export default ImageBox;
