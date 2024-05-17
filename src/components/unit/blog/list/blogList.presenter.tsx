import SearchInput from '../../../commons/inputs/search';
import BlogCards from '../cards/blogCards.container';
import * as S from './blogList.styles';
const BlogListUI = ({title}:{title:string}) => {
    const temp = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  return (
    <S.Wrapper>
            <S.BlogTitleWrapper>{title}</S.BlogTitleWrapper>
            <SearchInput/>
        <S.InnerWrapper>
            {temp.map(e=>(
                <BlogCards key={e}/>
            ))}
            {temp.length%4 !== 0
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
