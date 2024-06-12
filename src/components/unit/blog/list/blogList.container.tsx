import { useRouter } from "next/router"
import BlogListUI from "./blogList.presenter"
import axios from "axios"
import { useEffect, useState } from "react"

const BlogList = ({staticData,staticTotal,staticCategories}) => {
    const router = useRouter()
    // const category = router.query.category 
    const category = staticCategories
    const [keyword,setKeyword] = useState('')
    const [page,setPage] = useState(1)
    // const [total,setTotal] = useState(0)
    const [total,setTotal] = useState(staticTotal)
    // const [data,setData] = useState()
    const [data,setData] = useState(staticData)
    
    const getData = () => {
        return axios.get(process.env.NEXT_PUBLIC_API, {
            params: {
                page:router.query.page,
                categories: category === 'overall' ? '' : category,
                keyword:router.query.keyword
            }
        }).then((res) => {
            setTotal(res?.data?.count)
            setData(res?.data?.results)
        });
    }
    const onChangeKeyword = (event) => {
        setKeyword(event.target.value)
    }
    const onClickSearch = () => {
        router.push({
            pathname:router.pathname,
            query:{...router.query,page:1, keyword}
        })
    }
    const onClickPage = (pageNumber) => {
        if(page===pageNumber) return
        setPage(pageNumber)
        router.push({
            pathname:router.pathname,
            query:{...router.query,page:pageNumber}
        })
    }
    useEffect(()=>{
        const { keyword,page } = router.query;
        if (keyword) {
            setKeyword(String(keyword));
        }else{
            setKeyword('')
        }
        if(page){
            setPage(Number(page))
        }
        getData()
    },[router.query])
    return(
        <BlogListUI
            data={data}
            total={total}
            title={String(router.query.category)}
            keyword={keyword}
            currentPage={page}
            onChangeKeyword={onChangeKeyword}
            onClickSearch={onClickSearch}
            onClickPage={onClickPage}
        />
    )
}
export default BlogList