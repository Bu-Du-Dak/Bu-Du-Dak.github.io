import { useState } from 'react';
import WriteUI from './write.presenter';
import axios from 'axios';

const Write = () => {
    const [variables,setVariables] = useState({})
    const onClickWrite = async () => {
        await axios.post('http://127.0.0.1:8000/api/posts/',{
            title:variables['title'],
            categories:variables['category'],
            content:variables['content']
        })
    }
    console.log(variables)
    const onChangeInput = (event) => {
        const {name,value} = event.target
        setVariables({
            ...variables,
            [name]:value
        })
    }
    const onChangeCodeEditor = (value) => {
        setVariables({
            ...variables,
            content:value
        })
    }
    const onChangeSelection = (event) => {
        setVariables({
            ...variables,
            'category':event.target.value
        })
    }
    return(
        <WriteUI
            variables={variables}
            onChangeInput={onChangeInput}
            onChangeCodeEditor={onChangeCodeEditor}
            onChangeSelection={onChangeSelection}
            onClickWrite={onClickWrite}
        />
    )
}
export default Write