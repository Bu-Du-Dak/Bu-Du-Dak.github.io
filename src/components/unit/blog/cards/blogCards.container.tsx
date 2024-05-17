import { useRouter } from 'next/router';
import BlogCardsUI from './blogCards.presenter';

const BlogCards = () => {
  const router = useRouter();
  const onClickCard = (path:string) => {
    router.push(`/blog/detail/${path}`);
  };
  return (
    <BlogCardsUI
        id='qwqq'
        category='Next.js'
      title={'asd'}
      contents="NextJSdwq"
      date="2022"
      onClickCard={onClickCard}
    />
  );
};
export default BlogCards;
