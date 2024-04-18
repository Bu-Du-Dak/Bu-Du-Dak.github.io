import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: space-between;
  @media (max-width: 650px) {
    justify-content: center;
		flex-direction: column;
	}
  @media (min-width: 768px) {
		width: 750px;
	}
	@media (min-width: 992px) {
		width: 970px;
	}
  @media (min-width: 1400px) {
		width: 1400px;
  } */
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 650px) {
    align-items: center !important;
    justify-content: center;
		flex-direction: column;
    margin-bottom: 20px;
	}
`