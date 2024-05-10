import styled from "@emotion/styled"
import SectionPage from "../Section/Section.index"
import { useTheme } from "next-themes"
import DarkBackgroundImage from "./backgroundImage/bgImage.dark"
import LightBackgroundImage from "./backgroundImage/bgImage.light"
import Intro from "./intro/intro.container"
import Article from "../article/article.index"
import { HOME_TEXT } from "../../../commons/ContentsText"
import { ArticleTitle } from "../../../commons/globalStyles"


const HomePage = () => {
  const {theme} = useTheme()
  
  return (
    <Container>
    {theme==='dark' ? 
      <DarkBackgroundImage/>:
      <LightBackgroundImage/>
    }
    <Intro/>
    <Contents>
      <ArticleTitle>Hello, Web!</ArticleTitle>
      <Article text={HOME_TEXT.intro}/>
    </Contents>

    </Container>
  )
}
const Container = styled.div`
  width: 100%;
`
const Contents = styled.div`
  width:100%;
  background-color: rgba(255,255,255,.1);
  backdrop-filter: blur(.3rem);
  border: .5px solid rgba(255,255,255,.1);
  box-shadow: 0 1rem 2rem 0 rgba( 0, 0, 0, 0.2 );
  padding: 1rem 2rem;
  border-radius: 1rem;
`
export default HomePage