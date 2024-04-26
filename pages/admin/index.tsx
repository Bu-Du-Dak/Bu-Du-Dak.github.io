import { useEffect, useState } from "react"
import Admin from "../../src/components/unit/admin/admin.index"
import { useRouter } from "next/router"

const AdminDetail = () => {
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        const pw = prompt()
        if(pw !== process.env.NEXT_PUBLIC_ADMIN_PW){
            router.back()
        }else{
            setIsLoading(false)
        }
    },[])
    return(
        !isLoading&&
        <Admin/>
    )
}
export default AdminDetail