import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding: 2rem 0;
    display:flex;
    flex-direction: column;
    align-items: start;
    gap:2rem;
`
export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
`
export const Input = styled.input`
    width:20rem;
    height: 2rem;
`
export const Button = styled.div`
    width: fit-content;
    padding:.6rem;
    border:1px solid var(--text-color);
    cursor: pointer;
`
export const Selection = styled.select`
    padding:.6rem;
`