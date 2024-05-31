import { titleTranslate } from './blogTitleTranslate';
import SearchInput from '../../../commons/inputs/search';
import BlogCards from '../cards/blogCards.container';
import * as S from './blogList.styles';
import { ChangeEvent } from 'react';
import Pagination from '../../../commons/pagination/pagination.container';
const BlogListUI = ({
  title,
  total,
  data,
  keyword,
  currentPage,
  onChangeKeyword,
  onClickSearch,
  onClickPage
}: {
  title: string;
  total:number
  keyword: string;
  currentPage:number
  data: {
    title: string;
    categories: string;
    content: string;
    id: number;
    created: Date;
  }[];
  onChangeKeyword: (event:ChangeEvent<HTMLInputElement>) => void;
  onClickSearch:()=>void
  onClickPage:(pageNumber:number)=>void
}) => {
  return (
    <S.Wrapper>
      <S.BlogTitleWrapper>{titleTranslate(title)}</S.BlogTitleWrapper>
      <SearchInput value={keyword} onChange={onChangeKeyword} onClick={onClickSearch} />
      <S.InnerWrapper>
        {data?.map(e => (
          <BlogCards
            key={e.id + e.title}
            id={e.id}
            title={e.title}
            category={e.categories}
            content={e.content}
            created={e.created.toString().split('T')[0]}
          />
        ))}
        {data?.length % 4 !== 0 && (
          <>
            <div style={{ width: '20rem' }} />
            <div style={{ width: '20rem' }} />
            <div style={{ width: '20rem' }} />
          </>
        )}
      </S.InnerWrapper>
      <Pagination total={total} currentPage={currentPage} onClickPage={onClickPage}/>
    </S.Wrapper>
  );
};

export default BlogListUI;
