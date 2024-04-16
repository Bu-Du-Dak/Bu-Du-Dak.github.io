import ReactGA from 'react-ga4'
import { useEffect } from "react"
import { useRouter } from 'next/router'

const useAnalytics = () => {
    const router =useRouter()
    useEffect(()=>{
        ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
        if(router.pathname){
            ReactGA.send({hitType:'pageview',page:router.pathname})
        }
    },[router.pathname])
    return null
}
export default useAnalytics