import {titleTranslate} from './blogTitleTranslate'
import SearchInput from '../../../commons/inputs/search';
import BlogCards from '../cards/blogCards.container';
import * as S from './blogList.styles';
const BlogListUI = ({title,data}:{title:string,data:{title:string,categories:string,content:string,id:number,created:Date}[]}) => {
  return (
    <S.Wrapper>
            <S.BlogTitleWrapper>{titleTranslate(title)}</S.BlogTitleWrapper>
            <SearchInput/>
        <S.InnerWrapper>
            {data?.map(e=>(
                <BlogCards 
                    key={e.id+e.title}
                    id={e.id}
                    title={e.title}
                    category={e.categories}
                    content={e.content}
                    created={e.created}
                />
            ))}
            {data?.length%4 !== 0
            &&
            <>
                <div style={{width:'20rem'}}/>
                <div style={{width:'20rem'}}/>
                <div style={{width:'20rem'}}/>
            </>
            }
        </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default BlogListUI;
