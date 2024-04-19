import { ContentsText } from "../../../../../commons/ContentsText"
import Article from "../../../article/article.index"
import CodeBlock from "../../../codeBlock/codeBlock.index"

const Year2024UI = () => {
    const code = `function helloWorld() {
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
        console.log("Hello, world!");
    }`
    return(
        <>
            <CodeBlock language={'typescript'} code={code}/>
            <Article text={ContentsText.AboutMe} subContent={<div style={{width:'50%',height:'10rem',backgroundColor:'red',marginRight:'1rem'}}>
                sub
            </div>} />
            <Article title="subTitle" text={ContentsText.AboutMe} subContent={<div style={{width:'20rem',height:'20rem',backgroundColor:'red'}}>
                sub
            </div>} reverse/>
            <Article title="asdmqwiofqnwgoi" text={ContentsText.AboutMe}/>
            <Article title="asdmqwiofqnwgoi" text={ContentsText.AboutMe} subContent={<CodeBlock language={'typescript'} code={code}/>}/>
        </>
    )
}
export default Year2024UI