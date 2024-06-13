import { useMemo, useState } from "react"
import BlogDetailUI from "./blogDetail.presenter"
import axios from "axios"
import { useRouter } from "next/router"

const BlogDetail = ({staticData}) => {
    const router = useRouter()
    const [data,setData] = useState(staticData)
    const [isLoading,setIsLoading] = useState(true)
    const getData = (id) => {
        id && axios.get(`${process.env.NEXT_PUBLIC_API}/posts/${id}`).then((res)=>setData(res.data)).finally(()=>setIsLoading(false))
    }
    useMemo(()=>{
        getData(router.query.id)
    },[router.query.id])
    return(
        !isLoading ?
        <BlogDetailUI
            data={data}
        />
        :
        <div>loading...</div>
    )
}
export default BlogDetail