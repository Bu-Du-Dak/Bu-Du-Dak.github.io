import { SectionTitle, Wrapper } from "./Section.styles"

const SectionPage = ({title,Component}:{title:string,Component:JSX.Element}) => {
    return(
        <Wrapper>
            <SectionTitle className="BottomDashed">{title}</SectionTitle>

            {Component}
            
            
        </Wrapper>
    )
}
export default SectionPage