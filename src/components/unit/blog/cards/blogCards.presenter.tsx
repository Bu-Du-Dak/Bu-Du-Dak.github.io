import { CHIP_STYLES } from '../../../../commons/globalStyles';
import * as S from './blogCards.styles';
interface BlogCardUIProps {
  id: string;
  category?: string;
  title: string;
  contents: string;
  date: string;
  onClickCard: (path: string) => void;
}
const BlogCardsUI = ({
  id,
  category,
  title,
  contents,
  date,
  onClickCard,
}: BlogCardUIProps) => {
  const image = contents.split('![](')[1]?.split(')')[0];
  return (
    <S.CardWrapper onClick={() => onClickCard(id)}>
      <S.ImageWrapper>
        <S.CardImage src={image||`${process.env.NEXT_PUBLIC_BUCKET_PATH}/blogDefault.jpg`} className="mainImage" />
      </S.ImageWrapper>
      <S.CardCategory style={CHIP_STYLES[category ? category : '기타']}>
        {category ? category : '기타'}
      </S.CardCategory>
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardContents>{contents.split('### ')[1]||contents.split('#### ')[1]}</S.CardContents>
      <S.CardDate>{date}</S.CardDate>
    </S.CardWrapper>
  );
};
export default BlogCardsUI;
