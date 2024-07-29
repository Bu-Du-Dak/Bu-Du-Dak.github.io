import axios from "axios"
import { useEffect, useState } from "react"

const useVisitorCounter = () => {
    const [result,setResult] = useState({})
    const fetchVisitor = async () => {
        try {
            const currentTime = new Date().toISOString();
            // console.log(`Sending current time: ${currentTime}`);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/visitor-count`, {
                params: {
                    current_time: currentTime,
                },
            });
            setResult(response.data);
            // console.log(`Received response: ${JSON.stringify(response.data)}`);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(()=>{
        fetchVisitor()
    },[])
    return result
}
export default useVisitorCounter