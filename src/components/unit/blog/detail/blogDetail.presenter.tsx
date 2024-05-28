import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import SectionPage from "../../Section/Section.index"
import styled from '@emotion/styled';

const BlogDetailUI = ({data}) => {
    return(
            <SectionPage title={data?.title} Component={
                <>
                <Date>{`작성일 : ${data?.created}`}</Date>
                <ContentBox>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data?.content}</ReactMarkdown> 
                </ContentBox>
                </>
            }/>
    )
}
const ContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`
const Date = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: var(--text-color-disabled);
    padding-bottom: 1rem;
`
export default BlogDetailUI