import * as S from './skills.styles'
const SkillsUI = ({title,itemArr}) => {
    return(
        <S.Wrapper>
            <S.SkillTitle>{title}<span className='dot'>.</span></S.SkillTitle>
            <S.SkillWrapper>
                {itemArr.map((e)=>(
                    <S.SkillItem key={e}>
                        <S.SkillDot/>
                        {e}
                    </S.SkillItem>
                ))}
            </S.SkillWrapper>
        </S.Wrapper>
    )
}
export default SkillsUI