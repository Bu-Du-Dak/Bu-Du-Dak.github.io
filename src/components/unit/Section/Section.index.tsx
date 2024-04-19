import { useTheme } from "next-themes"
import { SectionTitle, Wrapper } from "./Section.styles"

const SectionPage = ({title,Component}:{title:string,Component:JSX.Element}) => {
    const {theme}=useTheme()
    return(
        <Wrapper>
            <SectionTitle theme={theme}>{title}</SectionTitle>

            {Component}
            
            
        </Wrapper>
    )
}
export default SectionPage