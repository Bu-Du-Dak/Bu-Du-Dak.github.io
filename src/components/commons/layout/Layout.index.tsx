import styled from "@emotion/styled"
import { Container } from "../../../commons/globalStyles"
import LayoutHeader from "./header/LayoutHeader"

const Layout = (props) => {
  return(
    <>
    <TopLine/>
    <Container>
      <LayoutWrapper>
        <LayoutHeader/>
        <Body className="container">{props.children}</Body>
      </LayoutWrapper>
    </Container>
    </>
  )
}
const TopLine = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 15px;
  background: linear-gradient(90deg,#02AAB0,#C4E0E5);
  /* background: linear-gradient(90deg,#02AAB0,#00CDAC); */
`
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
`;
export default Layout