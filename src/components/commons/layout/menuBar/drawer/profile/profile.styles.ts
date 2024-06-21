import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { SmallText } from '../../../../../../commons/globalStyles';

const darkImageCardEffect = keyframes`
    0%{
    border: 1.5px solid #f9f295;
    background-position: 0 0;
    }
    5%{
      border: 1.5px solid #e0aa3e;
      background-position: 20% 20%;
    }
    10%{
      border: 1.5px solid #e0aa3e;
      background-position: 40% 40%;
    }
    15%{
      border: 1.5px solid #b88a44;
      background-position: 60% 60%;
    }
    20%{
      border: 1.5px solid #e0aa3e;
      background-position: 80% 80%;
    }
    25%{
      border: 1.5px solid #e0aa3e;
      background-position: 100% 100%;
    }
    30%{
      border: 1.5px solid #f9f295;
      background-position: 80% 80%;
    }
    45%{
      border: 1.5px solid #e0aa3e;
      background-position: 60% 60%;
    }
    60%{
      border: 1.5px solid #e0aa3e;
      background-position: 50% 50%;
    }
    75%{
      border: 1.5px solid #e0aa3e;
      background-position: 30% 30%;
    }
    90%{
      border: 1.5px solid #f9f295;
      background-position: 10% 10%;
    }
    100%{
      border: 1.5px solid #e0aa3e;
      background-position: 0 0;
    }
`;
const lightImageCardEffect = keyframes`
    0%{
    border: 1.5px solid #009473;
    background-position: 0 0;
    }
    5%{
      border: 1.5px solid #FA7268;
      background-position: 20% 20%;
    }
    10%{
      border: 1.5px solid #FA7268;
      background-position: 40% 40%;
    }
    15%{
      border: 1.5px solid #FA7268;
      background-position: 60% 60%;
    }
    20%{
      border: 1.5px solid #008080;
      background-position: 80% 80%;
    }
    25%{
      border: 1.5px solid #008080;
      background-position: 100% 100%;
    }
    30%{
      border: 1.5px solid #009473;
      background-position: 80% 80%;
    }
    45%{
      border: 1.5px solid #FA7268;
      background-position: 60% 60%;
    }
    60%{
      border: 1.5px solid #FA7268;
      background-position: 50% 50%;
    }
    75%{
      border: 1.5px solid #FA7268;
      background-position: 30% 30%;
    }
    90%{
      border: 1.5px solid #009473;
      background-position: 10% 10%;
    }
    100%{
      border: 1.5px solid #FA7268;
      background-position: 0 0;
    }
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px 0;
  margin-top: 2rem;
  border: 1px solid var(--selected-text-color);
  border-radius: 1rem;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(0.3rem);
`;
export const ProfileDeco = styled.div`
  @media (min-width: 420px) {
    width: 6.45rem;
    height: 7.35rem;
    top:4.7rem;
    left: 3.7rem;
  }
  /* width: 9rem;
  height: 11rem; */
  width: 4.2rem;
  height: 4.7rem;
  /* border-radius: 2rem; */
  
  background: linear-gradient(
    137deg,
    rgba(255, 246, 183, 0.2),
    rgba(247, 124, 153, 0.2),
    rgba(101, 120, 242, 0.2),
    rgba(194, 255, 216, 0.2)
  );
  background-size: 400% 400%;
  animation: ${({ theme }) =>
    css`
      ${theme === 'dark'
        ? darkImageCardEffect
        : lightImageCardEffect} 4s infinite linear
    `};
  position: absolute;
  top:3.4rem;
  left: 2.3rem;
`;
export const ProfileImage = styled.div`
  @media (min-width: 420px) {
    width: 14rem;
    height: 15rem;
  }
  background-image: url('https://bududak-s3-bucket.s3.ap-northeast-2.amazonaws.com/logo.png');
  background-size: cover;
  background-position: center;
  width: 9rem;
  height: 9.5rem;
  border-radius: 2rem;
`;
export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
export const Divider = styled.div`
  width: 1px;
  height: 10px;
`;
export const CountWrapper = styled(SmallText)``;
