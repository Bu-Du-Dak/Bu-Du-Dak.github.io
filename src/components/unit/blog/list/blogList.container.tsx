import { useRouter } from "next/router"
import BlogListUI from "./blogList.presenter"
import axios from "axios"
import { useEffect, useState } from "react"

const BlogList = () => {
    const router = useRouter()
    const category = router.asPath.split('/')[2]
    const [page,setPage] = useState(1)
    const [data,setData] = useState()
    const getData = () => {
        return axios.get(`http://127.0.0.1:8000/api/posts/?page=${page}&categories=${category==='overall' ? '' : category}`).then((res)=>setData(res?.data?.results))
    }
    useEffect(()=>{
        getData()   
    },[router.query])
    return(
        <BlogListUI
            title={String(router.query.category)}
            data={data}
        />
    )
}
export default BlogList