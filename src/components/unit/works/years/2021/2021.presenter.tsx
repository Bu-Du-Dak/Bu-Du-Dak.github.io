import Lightbox from 'react-image-lightbox';
import { WORKS_TEXT_2021 } from "../../../../../commons/ContentsText"
import ImageBox from "../../../../commons/ImageBox"
import Article from "../../../article/article.index"
import * as S from '../../works.styles'
const Year2021UI = ({imageOpen,setImageOpen,onClickImage}) => {
    return(
        <S.Container>
            {imageOpen &&
                <Lightbox mainSrc={imageOpen} onCloseRequest={()=>{setImageOpen('')}}/>
            }
            <Article text={WORKS_TEXT_2021[1]} subContent={<ImageBox width="30rem" imagePath="/images/codeCamp.png"/>}/>
            <Article text={WORKS_TEXT_2021[2]} subContent={<ImageBox onClick={onClickImage} imagePath="/images/app.png" description={`<span style="font-size:.9rem;" >github에서 보려면 <a href="https://github.com/Bu-Du-Dak/Project_72" target="_blank" style="text-decoration:none; color:var(--selected-text-color);">여기</a></span>`}/>} reverse/>
            <ImageBox imagePath="/images/flow.png" onClick={onClickImage}/>
            <Article text={WORKS_TEXT_2021[3]}/>
            <ImageBox imagePath="/images/appNavigation.png" onClick={onClickImage}/>
            <Article text={WORKS_TEXT_2021[4]}/>
            <Article text={WORKS_TEXT_2021[5]}/>
            <Article text={WORKS_TEXT_2021[6]} subContent={<ImageBox imagePath="/images/lateWork.jpeg" description="퇴근한지 2시간 반 넘음" />}/>
            <Article text={WORKS_TEXT_2021[7]} subContent={<ImageBox imagePath="/images/mentoWork.png" description="메모장에 정리본이 42개 이상...!" onClick={onClickImage}/>} reverse/>
            <Article text={WORKS_TEXT_2021[8]}/>
        </S.Container>
    )
}
export default Year2021UI