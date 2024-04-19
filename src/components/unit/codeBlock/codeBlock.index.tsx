import hljs from 'highlight.js'
import { useEffect } from 'react'
import * as S from './codeBlock.styles'
const CodeBlock = ({language,code}) => {
    useEffect(()=>{
        hljs.highlightAll()
    },[])
    return(
        <S.CodeBlockWrapper>
            <S.Code className={`language-${language}`}>
                {code}
            </S.Code>
        </S.CodeBlockWrapper>
    )
}
export default CodeBlock