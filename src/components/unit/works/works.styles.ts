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
    padding: 8px;
    border-radius: 8px;
    background-color: ${props=>props.backgroundColor};
    color:${(props=>props.color)};
`
export const FlexBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1rem;
    @media (min-width: 768px) {
        align-items: start;
		flex-direction: column;
	}
    @media (min-width: 992px){
        flex-direction: row;
    }
`