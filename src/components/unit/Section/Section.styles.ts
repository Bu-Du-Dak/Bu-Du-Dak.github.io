import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
const gradient = keyframes`
    0% { background-position: 0% 50%; }
    15% { background-position: 50% 50%; }
    30% { background-position: 75% 50%; }
    45% { background-position: 100% 50%; }
    60% { background-position: 75% 50%; }
    75% { background-position: 50% 50%; }
    88% { background-position: 25% 50%; }
    100% { background-position: 0% 50%; }
`;
export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const SectionTitle = styled.h3`
  width: 100%;
  text-align: center;
  border-bottom: 0.5px solid var(--text-color-disabled);
  font-size: 1.875rem;
  font-weight: 500;
  padding: 10px 0 15px 0;
  margin-bottom: 30px;

  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(45deg, #f9f295, #e0aa3e, #b88a44, #f9f295)'
      : 'linear-gradient(45deg, #009473, #FA7268, #008080, #009473)'};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradient} 5s linear infinite;
`;
