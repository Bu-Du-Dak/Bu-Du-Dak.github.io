import { CHIP_STYLES } from '../../../../commons/globalStyles'
import * as S from './blogCards.styles'
interface BlogCardUIProps{
    id:string,category?:string,title:string,contents:string,date:string,onClickCard:(path:string)=>void
}
const BlogCardsUI = ({id,category,title,contents,date,onClickCard}:BlogCardUIProps) => {
    return(
        <S.CardWrapper onClick={()=>onClickCard(id)}>
            <S.CardImage/>
            <S.CardCategory style={CHIP_STYLES[category]}>{category}</S.CardCategory>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardContents>{contents}</S.CardContents>
            <S.CardDate>{date}</S.CardDate>
        </S.CardWrapper>
    )
}
export default BlogCardsUI