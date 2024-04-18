import { ContentsText } from "../../../../../commons/ContentsText"
import Article from "../../../article/article.index"
import CodeBlock from "../../../codeBlock/codeBlock.index"

const Year2024UI = () => {
    const code = `function helloWorld() {
        console.log("Hello, world!");
    }`
    return(
        <>
            <CodeBlock language={'typescript'} code={code}/>
            <Article text={ContentsText.AboutMe} subContent={<div style={{width:'20rem',height:'20rem',backgroundColor:'red'}}>
                sub
            </div>} />
            <Article text={ContentsText.AboutMe} subContent={<div style={{width:'20rem',height:'20rem',backgroundColor:'red'}}>
                sub
            </div>} reverse/>
            <Article text={ContentsText.AboutMe}/>
        </>
    )
}
export default Year2024UI