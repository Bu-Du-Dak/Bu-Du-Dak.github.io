import Lightbox from "react-image-lightbox"
import { WORKS_TEXT_2023 } from "../../../../../commons/ContentsText"
import { ArticleTitle, CHIP_STYLES, Divider } from "../../../../../commons/globalStyles"
import ImageBox from "../../../../commons/ImageBox"
import Article from "../../../article/article.index"
import CodeBlock from "../../../codeBlock/codeBlock.index"
import { FlexBox, StackChips, StackWrapper } from "../../works.styles"

const Year2023UI = ({imageOpen,setImageOpen,onClickImage}) => {
    const NZT_CHIPS = ['TypeScript','React','Next.js','Axios','RestAPI','Apollo-client','graphQL','Docker','emotion','Jest']
    return(
        <>
            {imageOpen &&
                <Lightbox mainSrc={imageOpen} onCloseRequest={()=>{setImageOpen('')}}/>
            }
            <Article text={WORKS_TEXT_2023[1]} subContent={<ImageBox imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/reable.jpg`} description={`<span style="font-size:.9rem;">Reable 더 자세히 보려면 <a href="https://www.reable.ai/" target="_blank" style="text-decoration:none; color:var(--selected-text-color);">여기</a></span>`}/>}/>
            <Divider id="nzt"/>
            <ImageBox imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/NZTLogo.png`} width="20rem"/>
            <StackWrapper>
                {NZT_CHIPS.map((e)=>(
                    <StackChips key={e} backgroundColor={CHIP_STYLES[e]?.backgroundColor} color={CHIP_STYLES[e]?.color}>{e}</StackChips>
                ))}
            </StackWrapper>
            <Article text={WORKS_TEXT_2023[2]} subContent={<CodeBlock code={WORKS_TEXT_2023.code_1}/>} reverse/>
            <Article text={WORKS_TEXT_2023[3]} subContent={<CodeBlock code={WORKS_TEXT_2023.code_2}/>}/>
            <Article text={WORKS_TEXT_2023[4]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/NZTAdmin.png`} description="사용자 관리 화면"/>} reverse/>
            <Article text={WORKS_TEXT_2023[5]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/NZTHome.png`} description="전체보기 화면"/>}/>
            <Divider/>
            <Article text={WORKS_TEXT_2023[6]} subContent={<ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/coFlow.jpeg`} description="다른 분들 성함은 모자이크"/>} reverse/>
            <Divider />
            <ArticleTitle>GRESB</ArticleTitle>
            <Article text={WORKS_TEXT_2023[7]}/>
            <Article text={WORKS_TEXT_2023[8]} subContent={<ImageBox  onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/diagram.jpg`}/>} reverse/>
            <Article text={WORKS_TEXT_2023[9]} subContent={<CodeBlock code={WORKS_TEXT_2023.code_4}/>} />
            <Article text={WORKS_TEXT_2023[10]}/>
            <FlexBox>
                <ImageBox onClick={onClickImage} imagePath={`${process.env.NEXT_PUBLIC_BUCKET_PATH}/gresbExample.png`} description="endpoint 예시"/>
                <CodeBlock code={WORKS_TEXT_2023.code_3}/>
            </FlexBox>
            <Article text={WORKS_TEXT_2023[11]} subContent={<CodeBlock code={WORKS_TEXT_2023.code_5}/>} />
        </>
    )
}
export default Year2023UI