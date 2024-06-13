import { useRouter } from 'next/router';
import BlogCardsUI from './blogCards.presenter';

const BlogCards = ({id,title,category,content,created}) => {
  const router = useRouter();
  const onClickCard = (path:string) => {
    router.push(`/blog/${category}/detail/${path}`);
  };
  return (
    <BlogCardsUI
        id={id}
        category={category}
        title={title}
        contents={content}
        date={created}
        onClickCard={onClickCard}
    />
  );
};
export default BlogCards;
