import styled from "@emotion/styled"
import { SubTitle } from "../../../../commons/globalStyles"

const MenuBar = () => {
    return(
        <Wrapper>
            s
            <SubTitle>
                Bu-Du-Dak
            </SubTitle>
            <div></div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(184, 184, 184, 0.3);
`
export default MenuBar