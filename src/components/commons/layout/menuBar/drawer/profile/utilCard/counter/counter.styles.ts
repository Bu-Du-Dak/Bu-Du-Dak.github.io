import { FireOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    gap:20px;
`
export const Icon = styled(FireOutlined)`
    font-size: 2rem;
    // today 5 이상 일 경우 색 ㄱㄱ
    color:var(--selected-text-color);
`
export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
`