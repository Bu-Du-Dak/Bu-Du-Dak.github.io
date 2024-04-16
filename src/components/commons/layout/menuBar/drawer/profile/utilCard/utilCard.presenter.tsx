import styled from "@emotion/styled"
import Weather from "./weather/weather.container"
import Counter from "./counter/counter.container"

const UtilCardUI = () => {
    return(
        <Wrapper>
            <Counter/>
            <Divider/>
            <Weather/>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:column;
    padding: 20px;
    gap:20px;
    border: 0.5px solid var(--selected-text-color);
    border-radius: 1rem;
    @media (min-width: 420px) {
        width: 20rem;
        flex-direction:row;
    }
`
const Divider = styled.div`
    width: 9rem;
    height: .5px;
    background-color: var(--selected-text-color);
    @media (min-width: 420px) {
        width:.5px;
        height: 3rem;
    }
    
`
export default UtilCardUI