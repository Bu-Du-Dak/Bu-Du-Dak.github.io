import axios from "axios"
import { useEffect, useState } from "react"

const useVisitorCounter = () => {
    const [result,setResult] = useState({})
    const fetchVisitor = async() => {
        try{
            const result = await axios.get(`${process.env.NEXT_PUBLIC_API}/visitor-count`)
            setResult(result.data)
        }catch(e){console.log(e)}
    }
    useEffect(()=>{
        fetchVisitor()
    },[])
    return result
}
export default useVisitorCounter