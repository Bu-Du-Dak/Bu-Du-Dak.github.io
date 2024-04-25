import Particles from '../canvas/fireworks'
import * as S from './intro.styes'

const IntroUI = ({text}) => {
    return(
        <S.Wrapper>
            {/* <Particles/> */}
            <S.TextWrapper>
                <S.TypingWrapper>I can turn ideas into reality</S.TypingWrapper>
                <S.TypingWrapper>with <S.Typing>{text}</S.Typing><span className="cursor"/></S.TypingWrapper>
            </S.TextWrapper>
            <S.DownIcon/>
        </S.Wrapper>
    )
}
export default IntroUI