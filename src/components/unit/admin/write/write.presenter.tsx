import dynamic from 'next/dynamic';
import * as S from './write.styles'
const WriteUI = () => {
  const DynamicEditor = dynamic(
    () => import('../../toast/editor/textEditor'),
    { ssr: false } // 서버 사이드 렌더링 비활성화
  );
  return (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.Input/>
            <S.Selection>
                <option>typescript</option>
                <option>typescript</option>
            </S.Selection>
            <S.Button>Add</S.Button>
        </S.TitleWrapper>
      <DynamicEditor />
    </S.Wrapper>
  );
};
export default WriteUI;
