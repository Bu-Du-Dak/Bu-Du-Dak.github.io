import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding:1rem 0;
`
export const SkillTitle = styled.div`
    font-size:1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    .dot{
        color: var(--selected-text-color);
    }
`
export const SkillWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    line-height: 1.5rem;
`
export const SkillDot = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 0.3rem;
    height: 0.3rem;
    background-color: var(--selected-text-color);
    border-radius: 1rem;
`