import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
const ImageBox = ({
  width,
  height,
  imagePath,
  description,
  onClick,
}: {
  width?: string;
  height?: string;
  imagePath: string;
  description?: string;
  onClick?: (imagePath: string) => void;
}) => {
  return (
    <Wrapper width={width}>
      <Image
        src={imagePath}
        height={height}
        onClick={onClick ? () => onClick(imagePath) : () => {}}
      />
      {description && (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div<{ width: string }>`
  width: ${props => (props.width ? props.width : '100%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: gray;
  font-size: 0.8rem;
`;
const Image = styled.img<{
  height?: string;
}>`
  width: 100%;
  height: ${props => props.height};
  border-radius: 1rem;
`;
export default ImageBox;
