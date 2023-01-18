import { ContentsText } from "../../../../commons/ContentsText"
import { Contents, NormalText } from "../../../../commons/globalStyles"
import { Picture, Wrapper } from "./aboutMe.styles"

const AboutMePage = () => {
    return(
        <Wrapper>
            <Picture/>
            <Contents>
                <NormalText>
                    {ContentsText.AboutMe}
                </NormalText>
            </Contents>
        </Wrapper>
    )
}
export default AboutMePage