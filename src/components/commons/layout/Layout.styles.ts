import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ThemeBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid var(--text-color);
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
