import CounterUI from "./counter.presenter"
import { useEffect, useState } from "react"
import { getGoogleToken, getVisitedUser } from "../../../../../../../../utils/counter/counter.utils"
import { LoadingOutlined } from "@ant-design/icons"

const Counter = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [countUser,setCountUser] = useState({
        today:"0",
        total:"0"
    })
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const token = await getGoogleToken()
                const data = await getVisitedUser(token)
                const today = data[0]?.value
                const total = data[1]?.value
                setCountUser({today,total})
                setIsLoading(false)
            }catch(e){console.log(e)}    
        }
        fetchData()
    },[])
    return(
        isLoading ? 
        <LoadingOutlined/>:
        <CounterUI
            countUser={countUser}
        />
    )
}
export default Counter