import { useState } from "react"
import Year2023UI from "./2023.presenter"

const Year2023 = () => {
    const [imageOpen,setImageOpen] = useState('')
    const onClickImage = (src) => {
        setImageOpen(src)
    }
    return(
        <Year2023UI
        imageOpen={imageOpen}
        setImageOpen={setImageOpen}
        onClickImage={onClickImage}
        />
    )
}
export default Year2023