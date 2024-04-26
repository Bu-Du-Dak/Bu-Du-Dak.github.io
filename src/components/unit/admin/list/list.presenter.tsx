import * as S from './list.styles'
const ListUI = () => {
    const temp = new Array(100).fill(1)
    return(
        <S.Wrapper>
            {temp.map((e)=>(

            <S.ItemRow>
                <S.ItemDate>22222222</S.ItemDate>
                <S.ItemCategories>wqdqwdqwdqwd</S.ItemCategories>
                <S.ItemTitle>qwdjonqwdowqndioqwd</S.ItemTitle>
                <S.ItemEdit>Edit</S.ItemEdit>
                <S.ItemDelete>Delete</S.ItemDelete>
            </S.ItemRow>
            ))}
        </S.Wrapper>
    )
}
export default ListUI