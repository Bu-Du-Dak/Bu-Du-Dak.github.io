import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import SectionPage from "../../Section/Section.index"
import styled from '@emotion/styled';

const BlogDetailUI = () => {
    return(
            <SectionPage title="title" Component={
                <>
                <Date>{`작성일 : 2022.05.20`}</Date>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{'content'}</ReactMarkdown> 
                </>
            }/>
    )
}
const Date = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: var(--text-color-disabled);
    padding-bottom: 1rem;
`
export default BlogDetailUI