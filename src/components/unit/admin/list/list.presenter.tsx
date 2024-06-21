import * as S from './list.styles'
const ListUI = ({data,deleteData,onClickEdit}) => {
    return(
        <S.Wrapper>
            {data?.map((e)=>(
            <S.ItemRow key={e.id}>
                <S.ItemDate>{e.updated}</S.ItemDate>
                <S.ItemCategories>{e.categories}</S.ItemCategories>
                <S.ItemTitle>{e.title}</S.ItemTitle>
                <S.ItemEdit onClick={()=>onClickEdit(e.id)}>Edit</S.ItemEdit>
                <S.ItemDelete onClick={()=>deleteData(e.id)}>Delete</S.ItemDelete>
            </S.ItemRow>
            ))}
        </S.Wrapper>
    )
}
export default ListUI