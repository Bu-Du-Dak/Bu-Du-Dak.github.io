import styled from "@emotion/styled";

export const Wrapper = styled.article`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 0;
  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    flex-direction: row;
    gap: 5rem;
  }
`;
export const Title = styled.div`
  font-size: 1rem;
  min-width: 300px;
  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`;
export const Contents = styled.div`
  width: 100%;
  font-size: 1rem;
  white-space: pre-wrap;
  @media (min-width: 992px) {
    width: 60%;
  }
  @media (min-width: 1400px) {
    width: 70%;
  }
`;
export const ContentTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`;
export const SubContentsTitle = styled.div`
  font-weight: bold;
  margin: 2rem 0 1rem 0;
`;
export const SubContents = styled.div`
  width: 100%;
  white-space: pre-wrap;
  overflow-wrap: break-word;
`;