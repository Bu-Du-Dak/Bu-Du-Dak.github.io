import { useState } from "react"
import Year2021UI from "./2021.presenter"

const Year2021 = () => {
    const [imageOpen,setImageOpen] = useState('')
    const onClickImage = (src) => {
        setImageOpen(src)
    }
    return(
        <Year2021UI
            imageOpen={imageOpen}
            setImageOpen={setImageOpen}
            onClickImage={onClickImage}
        />
    )
}
export default Year2021