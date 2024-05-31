import SectionPage from "../../Section/Section.index"
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const DynamicViewer = dynamic(
    ()=>import('../../toast/viewer/textViewer'),
    {ssr:false}
)
const BlogDetailUI = ({data}) => {
    return(
            <SectionPage title={data?.title} Component={
                <>
                <Date>{`작성일 : ${data?.created.toString().split('T')[0]}`}</Date>
                <ContentBox>
                    <DynamicViewer contents={data?.content}/>
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