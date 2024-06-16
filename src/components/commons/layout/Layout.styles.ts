import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeIn = keyframes`
  0%{
    transform: translateX(100%);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;
export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const RecentBlog = styled.div<{isVisible:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  width: 250px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.3rem);
  border: 0.5px solid var(--selected-text-color);
  border-radius: 1rem;
  position: fixed;
  bottom: 100px;
  right: 20px;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 1s ease-out forwards;
  .title {
    width: 100%;
    padding: 0;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-wrap;
    cursor: pointer;
    :hover {
      color: var(--selected-text-color);
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
  }
`;
export const ThemeBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 0.1px solid var(--text-color);
  background-color: var(--background-color);
  opacity: 0.6;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  :hover {
    opacity: 1;
    ${({ theme }) =>
      theme === 'dark'
        ? `
      background-color: var(--background-color-light);
      color:var(--text-color-light);
    `
        : `
      background-color: var(--background-color-dark);
      color:var(--text-color-dark);
    `}
  }
`;
