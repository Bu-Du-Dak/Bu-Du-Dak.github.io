import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 50rem;
    overflow: auto;
    border: 1px solid var(--text-color);
    padding:2rem;
`
export const ItemRow = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    height:3rem;
    padding: 0.5rem;;
    border-bottom: 1px solid var(--text-color);
`
export const ItemDate = styled.div`
    width: 10%;
`
export const ItemCategories = styled.div`
    width: 15%;
`
export const ItemTitle = styled.div`
    width: 35%;
`
export const ItemEdit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
    border: 1px solid ;
    cursor:pointer;
    :hover{
        background-color: var(--selected-text-color);
    }
`
export const ItemDelete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
    border: 1px solid ;
    cursor:pointer;
    :hover{
        background-color: var(--selected-text-color);
    }
`