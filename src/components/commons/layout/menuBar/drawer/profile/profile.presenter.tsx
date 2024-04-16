import { useTheme } from 'next-themes';
import * as S from './profile.styles';
import { NormalText } from '../../../../../../commons/globalStyles';
import Weather from './utilCard/weather/weather.container';
import UtilCard from './utilCard/utilCard.container';
const ProfileUI = () => {
  const { theme } = useTheme();
  return (
    <S.ProfileContainer>
      <S.ProfileWrapper>
        <S.ProfileDeco theme={theme} />
        <S.ProfileImage />
      </S.ProfileWrapper>
      <NormalText>부두닭의 개발 노트</NormalText>
      <UtilCard/>
      {/* <Weather/> */}
      {/* <S.CounterContainer>
                <S.CountWrapper>
                    {`Total 
                    2`}
                </S.CountWrapper>
                <S.CountWrapper>
                    {`Today
                    2`}
                </S.CountWrapper>
            </S.CounterContainer> */}
    </S.ProfileContainer>
  );
};
export default ProfileUI;
