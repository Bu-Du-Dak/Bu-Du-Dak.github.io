import Prism from 'prismjs';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-css';
// import 'prismjs/components/prism-python';
import 'prism-themes/themes/prism-one-dark.css';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

const CodeBlock = ({ language, code }:{language?:string,code:string}) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const codeRef = useRef(null);
  const codeWrapperRef = useRef(null);
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
    if (codeWrapperRef.current) {
      const { scrollHeight, clientHeight } = codeWrapperRef.current;
      setIsOverflowing(scrollHeight > clientHeight);
    }
  }, [language, code, expanded]);

  const handleToggleExpand = () => {
    setExpanded(prev => !prev);
  };
  return (
    <CodeBlockWrapper ref={codeWrapperRef} expanded={expanded}>
      <Code ref={codeRef} className={`language-${language||'typescript'}`}>
        {code}
      </Code>
      {(isOverflowing || expanded) && (
        <ToggleButton onClick={handleToggleExpand}>{`전체 코드 ${expanded ? "닫기":"보기"}`}</ToggleButton>
      )}
    </CodeBlockWrapper>
  );
};

export default CodeBlock;

const CodeBlockWrapper = styled.pre`
  width: 100%;
  min-height: 10rem;
  font-size: 0.9rem;
  max-height: ${({ expanded }:{expanded:boolean}) => (expanded ? 'none' : '30rem')};
  overflow-y: hidden !important;
  position: relative;
`;

const Code = styled.code`
  border: 1px solid var(--selected-text-color);
  border-radius: 0.5rem;
`;

const ToggleButton = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  left: 0;
  bottom: 0;
  cursor: pointer;
  text-align: center;
  padding: 0.5rem;
  color: white;
  font-weight: bold;
`;
