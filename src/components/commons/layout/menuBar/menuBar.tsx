import styled from "@emotion/styled"
import { SubTitle } from "../../../../commons/globalStyles"
import MenuDrawer from "./drawer/drawer"

const MenuBar = () => {
    return(
        <Wrapper>
            <div style={{width:'57px'}}/>
            <SubTitle>
                Bu-Du-Dak
            </SubTitle>
            <MenuDrawer/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
export default MenuBar