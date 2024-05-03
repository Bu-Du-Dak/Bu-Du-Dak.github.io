import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    
`
export const StackWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    gap: .5rem;
    padding:1rem 0;
    flex-wrap: wrap;
`
export const StackChips = styled.div<{backgroundColor:string,color:string}>`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: ${props=>props.backgroundColor};
    color:${(props=>props.color)};
`