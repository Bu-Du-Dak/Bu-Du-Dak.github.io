import axios from 'axios';
import BlogDetail from '../../../../../src/components/unit/blog/detail/blogDetail.container';

export async function getStaticPaths() {
  const categories = ['overall', 'TypeScript', 'Python', 'DevOps'];
  const paths = [];
  try {
    for (const category of categories) {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/posts/`, {
        params: { categories: category },
      });
      const posts = res.data.results;

      posts.forEach(post => {
        paths.push({
          params: {
            category: category,
            id: String(post.id),
          },
        });
      });
    }
    return {
      paths,
      fallback: 'blocking',
    };
  } catch (e) {
    console.log(e);
    return {
      paths,
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/posts/${params.id}`,
      { timeout: 5000 }
    );
    const data = res.data;

    return {
      props: {
        data,
      },
      revalidate: 1, // 1초마다 페이지를 갱신
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
}
const BlogDetailPage = ({ data }) => {
  return data ? <BlogDetail staticData={data} /> : <div>Loading...</div>;
};
export default BlogDetailPage;
