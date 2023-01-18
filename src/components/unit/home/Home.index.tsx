import AboutMePage from "../articles/aboutMe/aboutMe.index"
import SectionPage from "../Section/Section.index"

const HomePage = () => {
  return (
    <>
      <SectionPage title="About Me" Component={<AboutMePage/>}/>
      <SectionPage title="Experience" Component={<div>aaaa</div>}/>
    </>
  )
}
export default HomePage