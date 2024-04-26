import { UilAngleDoubleDown } from '@iconscout/react-unicons';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;
const bounce = keyframes`
    0% {
        bottom:5rem;
    }
    50%{
        bottom:6rem;
    }
    100%{
        bottom:5rem;
    }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  position: relative;
`;
export const TextWrapper = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const TypingWrapper = styled.p`
  height: 3rem;
  /* font-size: 2.3rem; */
  font-size: 1.5rem;
  white-space: pre;
  display: flex;
  align-items: end;
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: var(--text-color);
    margin-left: 2px;
    animation: ${blink} 1s step-start infinite;
  }
  @media (min-width: 420px) {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1400px) {
    font-size: 2.5rem;
  }
`;
export const Typing = styled.span`
  font-size: 2.5rem;
  color: var(--selected-text-color);
  @media (min-width: 420px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 992px) {
    font-size: 3.3rem;
  }
  @media (min-width: 1400px) {
    font-size: 3.5rem;
  }
`;
export const DownIcon = styled(UilAngleDoubleDown)`
  position: absolute;
  bottom: 4rem;
  width: 4rem;
  height: 5rem;
  color: var(--selected-text-color);
  animation: ${bounce} 2s infinite;
  @media (min-width: 420px) {
    width: 4rem;
    height: 4rem;
  }
  @media (min-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;
