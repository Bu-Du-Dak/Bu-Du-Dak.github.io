import AboutMePage from "../articles/aboutMe/aboutMe.index"
import SectionPage from "../Section/Section.index"

const HomePage = () => {
  return (
    <>
      <SectionPage title="About Me" Component={<AboutMePage/>}/>
      <SectionPage title="Work Experience" Component={<div>드래그 했을경우 컬러 변경, top sticky color line</div>}/>
    </>
  )
}
export default HomePage