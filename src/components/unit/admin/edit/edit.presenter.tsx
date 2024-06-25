import dynamic from 'next/dynamic';
import * as S from './edit.styles'
const DynamicEditor = dynamic(
  () => import('../../toast/editor/textEditor'),
  { ssr: false } // 서버 사이드 렌더링 비활성화
);
const EditUI = ({isLoading,editorRef,variables,onChangeInput,onChangeCodeEditor,onChangeSelection,onClickWrite}) => {
  const selections = ['선택','TypeScript','Python','devOps']
  
  return (
    <S.Wrapper>
        <S.TitleWrapper>
            <S.Input name='title' onChange={onChangeInput} value={variables['title']}/>
            <S.Selection onChange={onChangeSelection}>
              {selections.map(e=>(
                <option key={e} value={e} selected={variables['category']===e}>{e}</option>
              ))}
            </S.Selection>
            <S.Button onClick={onClickWrite}>edit</S.Button>
        </S.TitleWrapper>
        {!isLoading&&
          <DynamicEditor editorRef={editorRef} variables={variables} onChange={onChangeCodeEditor}/>
        }
    </S.Wrapper>
  );
};
export default EditUI;