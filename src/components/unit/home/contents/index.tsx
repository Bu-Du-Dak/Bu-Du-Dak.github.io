import styled from "@emotion/styled"
import Article from "../../article/article.index"
import { DashedDivider, Divider } from "../../../../commons/globalStyles"
import FootPrints from "../../footPrints/footPrints.container"
import { HOME_TEXT } from "../../../../commons/ContentsText"
import { useRouter } from "next/router"

const HomeContents = () => {
    const router = useRouter()
    const onClickMove = (path:string) => {
        router.push(path)
    }
    return(
        <>
        <TitleWrapper>
          Hello, Web!
        </TitleWrapper>
        <Article text={HOME_TEXT.intro}/>
        <Divider/>
        <TitleWrapper>
          Experience
        </TitleWrapper>
        <FootPrints 
        title={HOME_TEXT.title_2023} 
        routeEvent={()=>onClickMove('/works/2023#nzt')}
        contents={{
          contentTitle:'NZT - Net Zero Tracker',
          period:'2023.05 ~ 현재',
          description:HOME_TEXT.description_2023,
          myWorks:HOME_TEXT.myWorks_2023,
          stacks:['TypeScript','React','Next.js','Axios','graphQL','Jest']
        }}/>
        <DashedDivider/>
        <FootPrints title={HOME_TEXT.title_2022} contents={{
          contentTitle:'NZT - Net Zero Tracker',
          period:'2023.05 ~ 현재',
          description:HOME_TEXT.description_2023,
          myWorks:HOME_TEXT.myWorks_2023,
          stacks:['TypeScript','React','Next.js','Axios','graphQL']
        }}/>
        <FootPrints contents={{
          contentTitle:'NZT - Net Zero Tracker',
          period:'2023.05 ~ 현재',
          description:HOME_TEXT.description_2023,
          myWorks:HOME_TEXT.myWorks_2023,
          stacks:['TypeScript','React','Next.js','Axios','graphQL']
        }}/>
        <Divider/>
        </>
    )
}

const TitleWrapper = styled.div`
  width:100%;
  text-align: center;
  font-size: 2rem;
  padding: 2rem 0 3rem 0;
  @media (min-width: 768px) {
    text-align: center;
	}
	@media (min-width: 992px) {
    text-align: start;
	}
`
export default HomeContents