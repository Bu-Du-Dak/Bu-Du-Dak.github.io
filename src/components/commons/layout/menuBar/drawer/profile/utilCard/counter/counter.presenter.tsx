import {
  BoldText,
  SmallText,
} from '../../../../../../../../commons/globalStyles';
import * as S from './counter.styles';
const CounterUI = ({countUser}) => {
  return (
    <S.Wrapper>
      <S.Icon />
      <S.InnerWrapper>
        <SmallText>Today : {countUser.today}</SmallText>
        <BoldText>Total : {countUser.total}</BoldText>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};
export default CounterUI;
