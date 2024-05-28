import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; 

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { useRef, useState } from 'react';

const TextEditor = ({onChange,value}) => {
  const toastRef = useRef(null);
  const [contents, setContents] = useState('');
  const onChangeEditor = () => {
    setContents(toastRef.current.getInstance().getMarkdown());
  };
  return (
    <>
      <Editor
        
        ref={toastRef}
        height="600px"
        initialValue={contents||''}
        previewStyle="vertical"
        theme="dark"
        initialEditType="markdown"
        onChange={onChangeEditor}
        // useCommandShortcut={true}
        autofocus={false}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </>
  );
};

export default TextEditor;
