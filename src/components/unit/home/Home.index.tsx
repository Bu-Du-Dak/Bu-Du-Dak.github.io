import styled from "@emotion/styled"
import BackgroundImage from "./backgroundImage/bgImage.dark"
import SectionPage from "../Section/Section.index"
import { useTheme } from "next-themes"
import DarkBackgroundImage from "./backgroundImage/bgImage.dark"
import LightBackgroundImage from "./backgroundImage/bgImage.light"
import { useEffect } from "react"
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
      {/* <div style={{width:'100%',height:'3000px',backgroundColor:'#fff'}}></div> */}
      
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  /* position: relative; */
`
export default HomePage