import * as S from './list.styles'
const ListUI = ({data}) => {
    return(
        <S.Wrapper>
            {data.map((e)=>(
            <S.ItemRow key={e.id}>
                <S.ItemDate>{e.updated}</S.ItemDate>
                <S.ItemCategories>{e.categories}</S.ItemCategories>
                <S.ItemTitle>{e.title}</S.ItemTitle>
                <S.ItemEdit>Edit</S.ItemEdit>
                <S.ItemDelete>Delete</S.ItemDelete>
            </S.ItemRow>
            ))}
        </S.Wrapper>
    )
}
export default ListUI