import hljs from 'highlight.js'
import { useEffect } from 'react'

const CodeBlock = ({language,code}) => {
    useEffect(()=>{
        hljs.highlightAll()
    },[])
    return(
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    )
}
export default CodeBlock