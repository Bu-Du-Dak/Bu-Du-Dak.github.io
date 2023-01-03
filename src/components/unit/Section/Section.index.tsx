
import { SectionTitle, Wrapper } from "./Section.styles"

const SectionPage = ({title}:{title:string}) => {
    return(
        <Wrapper>
            <SectionTitle className="BottomDashed">{title}</SectionTitle>

        </Wrapper>
    )
}
export default SectionPage