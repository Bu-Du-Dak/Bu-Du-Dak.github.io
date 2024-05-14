import styled from '@emotion/styled';

export const ContactWrapper = styled.div<{ noTitle?: boolean }>`
  padding: ${({ noTitle }) => (noTitle ? '0 0 2rem 0' : '0 44px')};
  display: flex;
  flex-direction: column;
`;
export const ContactInnerWrapper = styled.div<{ noTitle?: boolean }>`
  display: flex;
  padding: ${({ noTitle }) => (noTitle ? '0' : '20px 0')};
  gap: 1rem;
`;
export const IconWrapper = styled.a<{noTitle?:boolean}>`
  cursor: pointer;
  font-size: ${({ noTitle }) => (noTitle ? '3rem' : '2rem')};
  color: var(--text-color);
  :hover {
    color: var(--selected-text-color);
  }
`;
