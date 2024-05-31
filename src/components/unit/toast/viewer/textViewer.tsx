import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'prismjs/components/prism-java'; 
import 'prismjs/components/prism-python';

import styled from '@emotion/styled';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const TextViewer = ({ contents }) => {
  const { theme } = useTheme();
  const [value,setValue] = useState(contents||'')
  useEffect(()=>{
    setValue(contents||'')
  },[contents])
  return (
    <Wrapper style={{ width: '100%', height: '500px' }}>
      <Viewer
        theme={theme}
        initialValue={value}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  .toastui-editor-defaultUI {
    border: none !important;
    border-radius: 0 !important;
  }
  .toastui-editor-contents * {
    font-size: 1.4rem;
    line-height: 3rem;
  }
  .toastui-editor-contents p {
    line-height: 2.7rem;
    margin: 1.4rem 0 !important;
    width: 100%;
    word-break: keep-all;
  }
  .toastui-editor-contents br {
    margin: 1.4rem 0 !important;
  }
  .toastui-editor-contents span {
    margin: 0 !important;
  }
  .toastui-editor-contents strong {
    margin: 0 !important;
    font-family: 'SUIT700' !important;
  }
  .ProseMirror div {
    font-size: 1.4rem;
  }
  .ProseMirror * {
    font-size: 1.4rem;
  }
  .toastui-editor-contents img {
    display: block;
    width: 750px;
    margin: 3rem auto;
    height: auto;
  }
  .toastui-editor-contents p img {
    display: block;
    width: 750px;
    margin: 3rem auto;
    height: auto;
  }
  .toastui-editor-contents h1 {
    font-size: 3rem;
    font-family: 'SUIT700';
    color: inherit;
    margin-top: 3rem;
  }
  .toastui-editor-contents h2 {
    font-size: 2.5rem;
    font-family: 'SUIT700';
    color: inherit;
    margin-top: 3rem;
  }
  .toastui-editor-contents h3 {
    font-size: 2rem;
    font-family: 'SUIT700';
    color: inherit;
    margin-top: 3rem;
  }
  .toastui-editor-contents h4 {
    font-size: 1.7rem;
    font-family: 'SUIT600';
    color: inherit;
    margin-top: 2rem;
  }
  .toastui-editor-contents h5 {
    font-size: 1.4rem;
    font-family: 'SUIT600';
    color: inherit;
    margin-top: 2rem;
  }
  .toastui-editor-contents h6 {
    font-size: 1.2rem;
    font-family: 'SUIT600';
    color: inherit;
    margin-top: 2rem;
  }
  .toastui-editor-contents hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .toastui-editor-contents table {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 12px 0 14px;
    color: #222;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;
  }
  .toastui-editor-contents thead {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 12px 0 14px;
    color: #222;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;
  }

  .toastui-editor-contents code {
    color: #c1798b;
    /* background-color: #f9f2f4; */
    padding: 2px 3px;
    letter-spacing: -0.3px;
    border-radius: 2px;
    font-size: 1.2rem;
    line-height: 1rem;
    .token.operator {
      background-color: transparent !important;
    }
  }
  .toastui-editor-contents pre {
    margin: 2px 0 8px;
    padding: 18px;
    /* background-color: #f4f7f8; */
  }
  .toastui-editor-contents pre code {
    /* background-color: #f4f7f8; */
    font-family: 'SUIT400';
    /* color: #24292e; */
  }
  blockquote {
    margin: 2rem 0px;
    border-left: 4px solid rgba(100, 0, 255, 0.5) !important;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #f8f9fa;
    padding: 1rem 1rem 1rem 2rem;
    color: black !important;
  }

  .toastui-editor-md-code-block-line-background * {
    font-size: 1.2rem;
  }

  .token {
    font-size: 1.2rem;
  }
`;

export default TextViewer;
