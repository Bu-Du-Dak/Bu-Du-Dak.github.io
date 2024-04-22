import * as S from './intro.styes'

const IntroUI = ({text}) => {
    return(
        <S.Wrapper>
            <S.TypingWrapper>I can use <S.Typing>{text}</S.Typing><span className="cursor"/></S.TypingWrapper>
        </S.Wrapper>
    )
}
export default IntroUI