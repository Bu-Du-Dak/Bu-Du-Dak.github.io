import Lightbox from 'react-image-lightbox';
import { useTheme } from 'next-themes';
import * as S from './profile.styles';
import { NormalText } from '../../../../../../commons/globalStyles';
import UtilCard from './utilCard/utilCard.container';
const ProfileUI = ({ imageOpen,setImageOpen }) => {
  const { theme } = useTheme();
  return (
    <>
      {imageOpen && (
        <Lightbox
          mainSrc={imageOpen}
          onCloseRequest={() => {
            setImageOpen('');
          }}
        />
      )}
      <S.ProfileContainer>
        <S.ProfileWrapper onClick={()=>setImageOpen('https://bududak-s3-bucket.s3.ap-northeast-2.amazonaws.com/logo.png')}>
          <S.ProfileDeco theme={theme} />
          <S.ProfileImage />
        </S.ProfileWrapper>
        <NormalText>부두닭의 개발 노트</NormalText>
        <UtilCard />
      </S.ProfileContainer>
    </>
  );
};
export default ProfileUI;
