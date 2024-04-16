import { Menu } from 'antd';
import styled from '@emotion/styled';

export const Container = styled.div`
  cursor: pointer;
`
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
  .ant-menu-item-divider{
    background-color: var(--selected-text-color);
  }
  .ant-menu-item-selected {
    font-weight: bold;
    color: var(--selected-text-color);
    background-color: var(--selected-background-color);
    .ant-menu-title-content{
      color: var(--selected-text-color);
    }
  }
  .ant-menu-submenu-arrow {
    color: var(--text-color);
  }
`;