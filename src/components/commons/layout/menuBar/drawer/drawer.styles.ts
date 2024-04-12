import { Menu } from 'antd';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const imageCardEffect = keyframes`
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
export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
`;
export const ProfileDeco = styled.div`
  @media (min-width: 420px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 768px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 992px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 1400px) {
    width: 12rem;
    height: 12rem;
  }
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  background: linear-gradient(
    137deg,
    rgba(255, 246, 183, 0.2),
    rgba(247, 124, 153, 0.2),
    rgba(101, 120, 242, 0.2),
    rgba(194, 255, 216, 0.2)
  );
  background-size: 400% 400%;
  animation: ${imageCardEffect} 4s infinite linear;
  position: absolute;
`;
export const ProfileImage = styled.div`
  @media (min-width: 420px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 768px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 992px) {
    width: 12rem;
    height: 12rem;
  }
  @media (min-width: 1400px) {
    width: 12rem;
    height: 12rem;
  }
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  /* background-color: #000; */
`;
export const TodayCounterWrapper = styled.div`
  padding: 0 24px;
  color: var(--text-color);
`;
export const TodayCounterInnerWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid var(--text-color);
`;
export const Button = styled.div`
  padding: 10px 20px;
`;
export const MyMenu = styled(Menu)`
  background-color: var(--background-color);
  padding: 20px;
  // 기본 메뉴
  .ant-menu-item-group-title {
    color: var(--text-color);
    opacity: 0.8;
  }
  .ant-menu-title-content {
    color: var(--text-color);
  }
  //단일메뉴 아이콘 색상
  .ant-menu-item-group-list {
    .ant-menu-item-icon {
      color: var(--text-color);
    }
  }
  // 선택 안된 서브메뉴 아이콘
  .ant-menu-submenu-title {
    color: var(--text-color);
  }
  // 서브 가지고 있는 애 선택 됌
  .ant-menu-submenu-selected {
    .ant-menu-submenu-title {
      font-weight: bold;
      color: var(--selected-text-color);
    }
  }
  .ant-menu-item {
    color: var(--text-color);
  }
  .ant-menu-item-selected {
    font-weight: bold;
    color: var(--selected-text-color);
    background-color: var(--selected-background-color);
  }
  .ant-menu-submenu-arrow {
    color: var(--text-color);
  }
`;
