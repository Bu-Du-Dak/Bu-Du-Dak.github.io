import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; 
import '@toast-ui/editor/dist/i18n/ko-kr';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'prismjs/components/prism-python';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';


const TextEditor = ({editorRef,onChange,variables}) => {
  return (
    <>
      <Editor
        key={'editor'}
        ref={editorRef}
        height="600px"
        initialValue={variables['content']||''}
        previewStyle="vertical"
        theme="dark"
        initialEditType="markdown"
        onChange={onChange}
        useCommandShortcut={true}
        autofocus={false}
        language='ko-KR'
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  );
};

export default TextEditor;
