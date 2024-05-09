import { useState } from "react"
import Year2022UI from "./2022.presenter"

const Year2022 = () => {
    const [imageOpen,setImageOpen] = useState('')
    const onClickImage = (src) => {
        setImageOpen(src)
    }
    return(
        <Year2022UI
            imageOpen={imageOpen}
            setImageOpen={setImageOpen}
            onClickImage={onClickImage}
        />
    )
}
export default Year2022