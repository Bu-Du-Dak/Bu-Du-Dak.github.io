import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import EditUI from './edit.presenter';
import { useRouter } from 'next/router';

const Edit = () => {
    const router = useRouter()
    const editorRef = useRef<Editor>(null)
    const [variables,setVariables] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        axios
        .get(`${process.env.NEXT_PUBLIC_API}/posts/${router.query.id}`)
        .then(result => setVariables({title:result.data.title,content:result.data.content,category:result.data.categories})).finally(()=>setIsLoading(false));
    },[])
    const onClickWrite = async () => {
        await axios.put(`${process.env.NEXT_PUBLIC_API}/posts/${router.query.id}`,{
            title:variables['title'],
            categories:variables['category'],
            content:variables['content']
        }).then(()=>router.push(`/blog/${variables['category']}/detail/${router.query.id}`))
    }
    const onChangeInput = (event) => {
        const {name,value} = event.target
        setVariables({
            ...variables,
            [name]:value
        })
    }
    const onChangeCodeEditor = () => {
        if(editorRef.current){
            setVariables({
                ...variables,
                content:editorRef.current.getInstance().getMarkdown()
            })
        }
    }
    const onChangeSelection = (event) => {
        setVariables({
            ...variables,
            'category':event.target.value
        })
    }
    return(
        <EditUI
            isLoading={isLoading}
            editorRef={editorRef}
            variables={variables}
            onChangeInput={onChangeInput}
            onChangeCodeEditor={onChangeCodeEditor}
            onChangeSelection={onChangeSelection}
            onClickWrite={onClickWrite}
        />
    )
}
export default Edit