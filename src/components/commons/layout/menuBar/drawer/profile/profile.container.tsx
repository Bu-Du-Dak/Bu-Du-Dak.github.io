import { useState } from "react"
import ProfileUI from "./profile.presenter"

const Profile = () => {
    const [imageOpen,setImageOpen] = useState('') 
    return(
        <ProfileUI
            imageOpen={imageOpen}
            setImageOpen={setImageOpen}
        />
    )
}
export default Profile