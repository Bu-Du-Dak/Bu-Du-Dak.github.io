import { css } from '@emotion/react';
import styled from '@emotion/styled';

// ! 초기화
export const GlobalCss = css`
  :root {
    /* --background-color-light: #F6F8F6; */
    --background-color-light: #FAF9FA;
    --text-color-light: #353638;
    --background-color-dark: #353638;
    --text-color-dark: rgba(255, 255, 255, 0.9);
    --selected-text-dark: rgb(299, 184, 11);
    --selected-text-light:#FA7268;
    --selected-background-dark: rgba(0, 0, 0, 0.2);
    --selected-background-light: rgba(250,114,104,.2);
    --text-color-disabled: rgba(155, 157, 160,.6);
  }
  /* 테마별 스타일 */
  .light {
    --background-color: var(--background-color-light); /* 라이트 테마 배경색 */
    --text-color: var(--text-color-light); /* 라이트 테마 텍스트 색상 */
    --selected-text-color: var(--selected-text-light);
    --selected-background-color: var(--selected-background-light);
  }

  .dark {
    --background-color: var(--background-color-dark); /* 다크 테마 배경색 */
    --text-color: var(--text-color-dark); /* 다크 테마 텍스트 색상 */
    --selected-text-color: var(--selected-text-dark);
    --selected-background-color: var(--selected-background-dark);
  }
  /* drawer 스타일 */
  .ant-drawer {
    .ant-drawer-content-wrapper{
        width:228px !important;
      @media (min-width:420px){
        width:378px !important;
      }
    }
    .ant-drawer-body {
      padding: 0;
    }
  }
  .ant-drawer-header{
    .ant-drawer-title{
      color: var(--text-color);
    }
    .anticon-close{
      color: var(--text-color);
    }
  }
  .ant-menu-item-active{
    .ant-menu-item-icon{
        color:var(--selected-text-color) !important;
      }
  }
  .ant-menu-sub{
    .ant-menu-item-active{
      .ant-menu-title-content{
        color:var(--selected-text-color);
      }
      .ant-menu-item-icon{
        color:var(--selected-text-color);
      }
    }
  }
  body {
    background-color: var(--background-color);
    color: var(--text-color);
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1rem;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    
    .container {
      min-width: 360px;
      @media (min-width:420px){
        width:400px;
        padding:10px;
      }
      @media (min-width: 768px) {
        width: 750px;
      }
      @media (min-width: 992px) {
        width: 970px;
      }
      @media (min-width: 1400px) {
        width: 1400px;
      }
    }
    .bold {
      font-weight: bold;
    }
    .right {
      align-items: flex-end;
    }
    font-family: 'Noto Sans KR', 'Nanum Gothic', sans-serif;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  strong{
    font-weight: bold;
  }
  code{
    border:none !important;
  }
`;
export const Container = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeadTitle = styled.h1`
  padding: 0.5rem 0;
  font-size: 2.5rem;
`;
export const SubTitle = styled.h2`
  padding: 0.4rem 0;
  font-weight: lighter;
  font-size: 1.25rem;
`;
export const NormalText = styled.p`
  line-height: 2;
  font-size: 1rem;
  white-space: pre-wrap;
`;
export const SmallText = styled.p`
  font-size: .8rem;
`
export const BoldText = styled.span`
  font-weight: bold;
`;
export const Divider = styled.div`
  width:100%;
  height: 0.5px;
  background-color: var(--text-color-disabled);
  margin: 2rem 0;
`
export const CHIP_STYLES = {
  "Next.js":{
      color:'#fff',
      backgroundColor:'#000'
  },
  "TypeScript":{
      color:'#fff',
      backgroundColor:'#3178c6'
  },
  "Apollo-client":{
      color:'#000',
      backgroundColor:'#fff'
  },
  "graphQL":{
      color:'#fff',
      backgroundColor:'#DD34A6'
  },
  "RestAPI":{
      color:'#fff',
      backgroundColor:'#DC880E'
  },
  "Axios":{
      color:'#fff',
      backgroundColor:'#844195'
  },
  "recoil":{
      color:'#fff',
      backgroundColor:'#0076ED'
  },
  "contextAPI":{
      color:'#000',
      backgroundColor:'#64ECF0'
  },
  "Docker":{
      color:'#fff',
      backgroundColor:'#0A97E5'
  },
  "socketIO":{
      color:'#fff',
      backgroundColor:'#6CA2F6'
  },
  "monacoEditor":{
      color:'#fff',
      backgroundColor:'#582C8E'
  },
  "agoraRTC":{
      color:'#fff',
      backgroundColor:'#0A97F5'
  },
}