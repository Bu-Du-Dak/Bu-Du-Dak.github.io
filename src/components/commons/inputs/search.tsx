import styled from "@emotion/styled"
import { UilSearch } from '@iconscout/react-unicons'
import { ChangeEvent, KeyboardEvent } from "react"
const SearchInput = ({value,onChange,onClick}:{
    value?:string
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void
    onClick:()=>void
}) => {
    const keyPressEnter = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key==='Enter'){
            onClick()
        }
    }
    return(
        <Wrapper>
            <Input value={value||''} onChange={onChange} onKeyDown={keyPressEnter} placeholder="제목 혹은 내용을 입력해주세요."/>
            <Icon onClick={onClick}/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    height: 2rem;
    padding: 0 1rem;
    border-radius: .5em;
    border: 1px solid var(--text-color-disabled);
    &:focus-within {
        outline: 1px solid var(--selected-text-color);
        height: 2rem;
        padding: 0 1rem;
        border-radius: .5em;
        outline: 1px solid var(--selected-text-color);
    }
`
const Input = styled.input`
    width: 100%;
    height:1.5rem;
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 1rem;
`
const Icon = styled(UilSearch)`
    color: var(--selected-text-color);
    cursor: pointer;
`
export default SearchInput