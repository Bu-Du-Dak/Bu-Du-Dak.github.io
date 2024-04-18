import * as S from './copyRight.styles'
const CopyRightUI = ({year}) => {
    return(
        <S.CopyRightWrapper>
            <S.Contents>© {year}. Bu-Du-Dak. All rights reserved. <br/>All pictures cannot be copied without permission.</S.Contents>
        </S.CopyRightWrapper>
    )
}
export default CopyRightUI