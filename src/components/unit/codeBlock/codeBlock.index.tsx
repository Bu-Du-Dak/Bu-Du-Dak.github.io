import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-python'
import 'prism-themes/themes/prism-one-dark.css'
import { useEffect } from 'react'
import * as S from './codeBlock.styles'

const CodeBlock = ({ language, code }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [language, code])

    return (
        <S.CodeBlockWrapper>
            <S.Code className={`language-${language}`}>
                {code}
            </S.Code>
        </S.CodeBlockWrapper>
    )
}

export default CodeBlock
