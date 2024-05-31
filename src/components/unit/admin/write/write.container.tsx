import { useRef, useState } from 'react';
import WriteUI from './write.presenter';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';

const Write = () => {
    const editorRef = useRef<Editor>(null)
    const [variables,setVariables] = useState({})
    const onClickWrite = async () => {
        await axios.post('http://127.0.0.1:8000/api/posts/',{
            title:variables['title'],
            categories:variables['category'],
            content:variables['content']
        })
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
        <WriteUI
            editorRef={editorRef}
            variables={variables}
            onChangeInput={onChangeInput}
            onChangeCodeEditor={onChangeCodeEditor}
            onChangeSelection={onChangeSelection}
            onClickWrite={onClickWrite}
        />
    )
}
export default Write