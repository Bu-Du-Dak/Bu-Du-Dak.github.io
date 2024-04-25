import { Editor, Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import 'prismjs/components/prism-java';
import { useEffect, useRef, useState } from 'react';
import TextViewer from '../viewer/textViewer';

const TextEditor = () => {
  const toastRef = useRef(null);
  const [contents, setContents] = useState('');
  const onChangeEditor = () => {
    setContents(toastRef.current.getInstance().getMarkdown());
  };
  console.log(contents);
  useEffect(() => {}, [contents]);
  return (
    <>
      <Editor
        ref={toastRef}
        height="600px"
        initialValue=""
        previewStyle="vertical"
        theme="dark"
        initialEditType="markdown"
        onChange={onChangeEditor}
        useCommandShortcut={true}
        autofocus={false}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      />
      <div style={{ width: '100%', height: '100%' }}>
        <TextViewer contents={contents} />
      </div>
    </>
  );
};

export default TextEditor;
