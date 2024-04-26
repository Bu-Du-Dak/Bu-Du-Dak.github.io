import styled from "@emotion/styled"
import SectionPage from "../Section/Section.index"
import { useTheme } from "next-themes"
import DarkBackgroundImage from "./backgroundImage/bgImage.dark"
import LightBackgroundImage from "./backgroundImage/bgImage.light"
import Intro from "./intro/intro.container"


const HomePage = () => {
  const {theme} = useTheme()
  
  return (
    <Container>
      {theme==='dark' ? 
        <DarkBackgroundImage/>:
        <LightBackgroundImage/>
      }
      <Intro/>
    <SectionPage title="asdasd" Component={<div>asdasdasd</div>}/>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
`
export default HomePage