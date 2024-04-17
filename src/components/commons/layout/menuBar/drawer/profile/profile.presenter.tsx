import { useTheme } from 'next-themes';
import * as S from './profile.styles';
import { NormalText } from '../../../../../../commons/globalStyles';
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
    </S.ProfileContainer>
  );
};
export default ProfileUI;
