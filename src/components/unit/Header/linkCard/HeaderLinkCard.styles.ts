import styled from "@emotion/styled";
import { BoldOutlined, GithubOutlined } from "@ant-design/icons";
// * 컨텍 카드 전체 wrapper
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;
// * github/blog wrapper
export const SocialBox = styled.ul`
  display: flex;
  margin-bottom: 20px;
`;
//* 개별 아이콘 상자
export const SocialItem = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.75rem;
  padding: 3px;
  background-color: #333;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: #fff;
    .icons {
      color: #333;
    }
  }
`;
export const GithubIcon = styled(GithubOutlined)`
  font-size: 40px;
  color: #fff;
`;
export const BlogIcon = styled(BoldOutlined)`
  font-size: 40px;
  color: #fff;
`;