import { useMemo, useState } from "react"
import BlogDetailUI from "./blogDetail.presenter"
import axios from "axios"
import { useRouter } from "next/router"

const BlogDetail = () => {
    const router = useRouter()
    const [data,setData] = useState()
    const getData = (id) => {
        id && axios.get(`http://127.0.0.1:8000/api/posts/${id}`).then((res)=>setData(res.data))
    }
    useMemo(()=>{
        getData(router.query.id)
    },[router.query.id])
    return(
        data ?
        <BlogDetailUI
            data={data}
        />
        :
        <>loading...</>
    )
}
export default BlogDetail