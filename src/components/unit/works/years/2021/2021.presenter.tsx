import { WORKS_TEXT_2021 } from "../../../../../commons/ContentsText"
import ImageBox from "../../../../commons/ImageBox"
import Article from "../../../article/article.index"
import * as S from '../../works.styles'
const Year2021UI = () => {
    return(
        <S.Container>
        <Article text={WORKS_TEXT_2021[1]} subContent={<ImageBox width="50%" height="9rem" imagePath="/images/codeCamp.png"/>}/>
        <Article text={WORKS_TEXT_2021[2]} subContent={<ImageBox width="100%" height="20rem" imagePath="/images/app.png" description={`<span style="font-size:.9rem;" >github에서 보려면 <a href="https://github.com/Bu-Du-Dak/Project_72" target="_blank" style="text-decoration:none; color:var(--selected-text-color);">여기</a></span>`}/>} reverse/>
        <ImageBox width="100%" height="30rem" imagePath="/images/flow.png"/>
        <Article text={WORKS_TEXT_2021[3]}/>
        <ImageBox  width="100%" height="25rem" imagePath="/images/appNavigation.png"/>
        <Article text={WORKS_TEXT_2021[4]}/>
        <Article text={WORKS_TEXT_2021[5]}/>
        <Article text={WORKS_TEXT_2021[6]} subContent={<ImageBox width="100%" height="15rem" imagePath="/images/lateWork.jpeg" description="퇴근한지 2시간 반 넘음"/>}/>
        <Article text={WORKS_TEXT_2021[7]} subContent={<ImageBox width="100%" height="15rem" imagePath="/images/mentoWork.png" description="메모장에 정리본이 42개 이상...!"/>} reverse/>
        <Article text={WORKS_TEXT_2021[8]}/>
        </S.Container>
    )
}
export default Year2021UI