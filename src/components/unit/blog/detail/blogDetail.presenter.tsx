import SectionPage from "../../Section/Section.index"
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Head from "next/head";

const DynamicViewer = dynamic(
    ()=>import('../../toast/viewer/textViewer'),
    {ssr:false}
)
const BlogDetailUI = ({data}) => {
    const image = data?.content.split('![](')[1]?.split(')')[0];
    return(
        <>
            <Head>
                <title>{data?.title||'부두닭의 개발기록'}</title>
                <meta name="description" content="부족하거나 잘못된 부분은 개선해 나가겠습니다."/>
                <meta property="og:title" content={data?.title||'부두닭의 개발기록'}/>
                <meta property="og:description" content="부족하거나 잘못된 부분은 개선해 나가겠습니다."/>
                <meta property="og:image" content={image||`${process.env.NEXT_PUBLIC_BUCKET_PATH}/blogDefault.jpg`}/>
            </Head>
            <SectionPage title={data?.title} Component={
                <>
                <Date>{`작성일 : ${data?.created.toString().split('T')[0]}`}</Date>
                <ContentBox>
                    <DynamicViewer contents={data?.content}/>
                </ContentBox>
                </>
            }/>
        </>
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