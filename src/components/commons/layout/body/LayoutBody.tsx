import styled from "@emotion/styled";

const LayoutBody = ({ children }: { children: JSX.Element }) => {
  return <LayoutBodyWrapper>{children}</LayoutBodyWrapper>;
};
const LayoutBodyWrapper = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default LayoutBody;
