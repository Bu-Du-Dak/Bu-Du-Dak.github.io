import styled from "@emotion/styled"
import LayoutHeader from "./header/LayoutHeader"

const Layout = (props) => {
  return(
      <LayoutWrapper>
        <LayoutHeader/>
        <Body>{props.children}</Body>
      </LayoutWrapper>
  )
}
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Layout