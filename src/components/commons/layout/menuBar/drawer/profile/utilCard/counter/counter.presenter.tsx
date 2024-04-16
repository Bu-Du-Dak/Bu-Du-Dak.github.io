import {
  BoldText,
  SmallText,
} from '../../../../../../../../commons/globalStyles';
import * as S from './counter.styles';
const CounterUI = () => {
  return (
    <S.Wrapper>
      <S.Icon />
      <S.InnerWrapper>
        <SmallText>Today : 2</SmallText>
        <BoldText>Total : 24</BoldText>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};
export default CounterUI;
