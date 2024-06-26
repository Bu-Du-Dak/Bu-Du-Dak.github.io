import styled from '@emotion/styled';
import { SmallText, SubTitle } from '../../../../commons/globalStyles';
import { Contents } from '../../../commons/layout/Layout.styles';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 20rem;
  height: 30rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.3rem);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border:.1px solid var(--text-color-disabled);
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  :hover{
    transform: scale(1.01);
    .mainImage{
      transform: scale(1.1);
    }
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 15rem;
  overflow: hidden;
  border-radius: 1rem;
`
export const CardImage = styled.div<{src?:string}>`
  width: 100%;
  height: 15rem;
  background-image: ${({ src }) => src ? `url(${src})` : 'none'};
  background-size: cover;
  background-position: center;
  background-color: gray;
  transition: transform 0.3s ease;
`;
export const CardCategory = styled.div`
  width: fit-content;
  line-height: 0.6rem;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 1rem;
`;
export const CardTitle = styled(SubTitle)`
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  line-height: 1.5rem;
  max-height: 3.5rem;
`;
export const CardContents = styled(Contents)`
  width: 100%;
  margin: 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: pre-wrap;
  line-height: 1.5rem;
  height: 3rem;
  max-height: 4rem;
`;
export const CardDate = styled(SmallText)`
  color: var(--text-color-disabled);
`;
