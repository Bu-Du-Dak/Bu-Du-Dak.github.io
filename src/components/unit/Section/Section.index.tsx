
import MainItems from "../../commons/mainItems/MainItems.index"
import { SectionTitle, Wrapper } from "./Section.styles"

const SectionPage = ({title,Component}:{title:string,Component:JSX.Element}) => {
    return(
        <Wrapper>
            <SectionTitle className="BottomDashed">{title}</SectionTitle>

            {Component}

            <MainItems/>
        </Wrapper>
    )
}
export default SectionPage