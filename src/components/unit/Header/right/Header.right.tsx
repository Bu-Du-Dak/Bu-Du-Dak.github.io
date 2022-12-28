import { NormalText } from "../../../../commons/globalStyles"
import { InnerWrapper } from "../Header.styles"
import HeaderLinkCardPage from "../linkCard/HeaderLinkCard"

const HeaderRightPage = () => {
  return(
    <InnerWrapper>
      <HeaderLinkCardPage/>
      
      <NormalText>Phone</NormalText><NormalText>010 9287 5350</NormalText>
      <NormalText>E-mail</NormalText><NormalText>guri930219@gmail.com2</NormalText>
      
    </InnerWrapper>
  )
}
export default HeaderRightPage