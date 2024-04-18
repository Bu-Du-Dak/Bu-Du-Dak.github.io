import CopyRightUI from "./copyRight.presenter"

const CopyRight = () => {
    const year = new Date().getFullYear()
    return(
        <CopyRightUI
            year={year}
        />
    )
}
export default CopyRight