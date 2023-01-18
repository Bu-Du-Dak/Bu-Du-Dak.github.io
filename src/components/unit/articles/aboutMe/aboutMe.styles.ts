import styled from "@emotion/styled";

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 768px) {
        align-items: center;
		flex-direction: column;
	}
	@media (min-width: 992px) {
        align-items: flex-start;
		flex-direction: row;
	}
 	@media (min-width: 1400px) {
        flex-direction: row;
  	}
`
export const Picture = styled.div`
    display: block;
    background-color: blue;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
`
