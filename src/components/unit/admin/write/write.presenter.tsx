import dynamic from 'next/dynamic';
import * as S from './write.styles'
const DynamicEditor = dynamic(
  () => import('../../toast/editor/textEditor'),
  { ssr: false } // 서버 사이드 렌더링 비활성화
);
const WriteUI = ({editorRef,variables,onChangeInput,onChangeCodeEditor,onChangeSelection,onClickWrite}) => {
  const selections = ['선택','TypeScript','Python']
  
  return (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.Input name='title' onChange={onChangeInput}/>
            <S.Selection onChange={onChangeSelection}>
              {selections.map(e=>(
                <option key={e} value={e}>{e}</option>
              ))}
            </S.Selection>
            <S.Button onClick={onClickWrite}>Add</S.Button>
        </S.TitleWrapper>
      <DynamicEditor editorRef={editorRef} variables={variables} onChange={onChangeCodeEditor}/>
    </S.Wrapper>
  );
};
export default WriteUI;
