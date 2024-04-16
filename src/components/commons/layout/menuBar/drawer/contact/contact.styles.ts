import styled from "@emotion/styled"

export const ContactWrapper = styled.div`
  padding:0 44px;
  display: flex;
  flex-direction: column;
`
export const ContactInnerWrapper = styled.div`
  display:flex;
  padding:20px 0;
  gap:1rem;
`
export const IconWrapper = styled.a`
  cursor: pointer;
  font-size:2rem;
  color:var(--text-color);
  :hover{
    color:var(--selected-text-color);
  }
`