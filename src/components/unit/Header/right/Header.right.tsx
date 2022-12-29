import { BoldText, NormalText } from "../../../../commons/globalStyles"
import { InnerWrapper } from "../Header.styles"
import HeaderLinkCardPage from "../linkCard/HeaderLinkCard"

const HeaderRightPage = () => {
  return(
    <InnerWrapper style={{alignItems:"flex-end"}}>
      <HeaderLinkCardPage/>
      <NormalText>Phone - <BoldText>010 9287 5350</BoldText></NormalText>
      <NormalText>E-mail - <BoldText>guri930219@gmail.com</BoldText></NormalText>
    </InnerWrapper>
  )
}
export default HeaderRightPage