import axios from "axios"
import ListUI from "./list.presenter"
import { useEffect, useState } from "react"

const List = () => {
    const [data,setData] = useState()
    const getData = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/posts/`).then((result)=>setData(result.data.results))
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <ListUI
            data={data}
        />
    )
}
export default List