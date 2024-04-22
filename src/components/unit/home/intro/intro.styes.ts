import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TypingWrapper = styled.p`
  font-size: 2.3rem;
  white-space: pre;
  display: flex;
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: var(--text-color);
    margin-left: 2px;
    animation: ${blink} 1s step-start infinite;
  }
`;
export const Typing = styled.h3`
 color:var(--selected-text-color);
`