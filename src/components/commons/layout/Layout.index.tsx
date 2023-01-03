import styled from "@emotion/styled"
import { Container } from "../../../commons/globalStyles"
import LayoutHeader from "./header/LayoutHeader"

const Layout = (props) => {
  return(
    <Container>

      <LayoutWrapper>
        <LayoutHeader/>
        <Body className="container">{props.children}</Body>
      </LayoutWrapper>
    </Container>
  )
}
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  `

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  
`;
export default Layout