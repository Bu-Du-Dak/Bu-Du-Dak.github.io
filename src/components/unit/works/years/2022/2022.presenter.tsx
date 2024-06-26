import Lightbox from "react-image-lightbox"
import { WORKS_TEXT_2022 } from "../../../../../commons/ContentsText"
import { ArticleTitle, CHIP_STYLES, Divider, SmallText, } from "../../../../../commons/globalStyles"
import ImageBox from "../../../../commons/ImageBox"
import Article from "../../../article/article.index"
import CodeBlock from "../../../codeBlock/codeBlock.index"
import { StackChips, StackWrapper } from "../../works.styles"
const Year2022UI = ({imageOpen,setImageOpen,onClickImage}) => {
    const EDITOR_CHIPS=['TypeScript','React','Next.js','Axios','RestAPI','socketIO','monacoEditor','agoraRTC','emotion']
    const DINGCO_CHIPS = ['TypeScript','React','Next.js','recoil','Apollo-client','graphQL','Docker','emotion']
    const BOOTCAMP_CHIPS = ['TypeScript','React','Next.js','contextAPI','Apollo-client','graphQL','Docker','emotion']
    return(
        <>
            {imageOpen &&
                <Lightbox mainSrc={imageOpen} onCloseRequest={()=>{setImageOpen('')}}/>
            }
            <Article text={WORKS_TEXT_2022[1]}/>
            <Divider id="webRTC"/>
            <ArticleTitle>실시간 화상형 에디터</ArticleTitle>
            <SmallText style={{color:'var(--text-color-disabled)'}}>Notion에서 더 자세히 보려면 <a href="https://bu-du-dak.notion.site/8f84294d2e1c40f18d831bdf7b4575a0?pvs=4" target="_blank" style={{color:'var(--selected-text-color)'}}>여기</a></SmallText>
            <StackWrapper>
                {EDITOR_CHIPS.map((e)=>(
                    <StackChips key={e} backgroundColor={CHIP_STYLES[e]?.backgroundColor} color={CHIP_STYLES[e]?.color}>{e}</StackChips>
                ))}
            </StackWrapper>
            <Article text={WORKS_TEXT_2022[6]}/>
            <Article text={WORKS_TEXT_2022[7]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/algorithmUser.gif`}/>}/>
            <Article text={WORKS_TEXT_2022[8]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/algorithmAdmin.gif`}/>} reverse/>
            <Article text={WORKS_TEXT_2022[9]} subContent={<CodeBlock code={WORKS_TEXT_2022.code_1} language={'javascript'}/>}/>
            <Article text={WORKS_TEXT_2022[10]} subContent={<CodeBlock code={WORKS_TEXT_2022.code_2} language={'javascript'}/>} reverse/>
            <Article text={WORKS_TEXT_2022[11]}/>
            <Divider id="dingco"/>
            <ArticleTitle>온라인 강의 서비스 딩코</ArticleTitle>
            <StackWrapper>
                {DINGCO_CHIPS.map((e)=>(
                    <StackChips key={e} backgroundColor={CHIP_STYLES[e]?.backgroundColor} color={CHIP_STYLES[e]?.color}>{e}</StackChips>
                ))}
            </StackWrapper>
            <Article text={WORKS_TEXT_2022[2]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/dingcoBanner.png`} description={`<span style="font-size:.9rem;">Notion에서 보려면 <a href="https://bu-du-dak.notion.site/23b6228d37ac49b49438d9eabf9dd6ad?pvs=4" target="_blank" style="color:var(--selected-text-color);">여기</a></span>`}/>}/>
            <Article text={WORKS_TEXT_2022[3]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/lecture.gif`} description={`<span style="font-size:.9rem;">인프런에서 보려면 <a href="https://www.inflearn.com/courses?s=%EC%BD%94%EB%93%9C%EC%BA%A0%ED%94%84" target="_blank" style="color:var(--selected-text-color)">여기</a></span>`}/>} reverse/>
            <Divider id="bootCamp"/>
            <ArticleTitle>온라인 부트캠프</ArticleTitle>
            <StackWrapper>
                {BOOTCAMP_CHIPS.map((e)=>(
                    <StackChips key={e} backgroundColor={CHIP_STYLES[e]?.backgroundColor} color={CHIP_STYLES[e]?.color}>{e}</StackChips>
                ))}
            </StackWrapper>
            <Article text={WORKS_TEXT_2022[4]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/itUp.gif`} description={`<span style="font-size:.9rem;">Notion에서 보려면 <a href="https://bu-du-dak.notion.site/6acb2156185340dd9c522868e81b5339?pvs=4" target="_blank" style="color:var(--selected-text-color)">여기</a></span>`}/>}/>
        </>
    )
}
export default Year2022UI