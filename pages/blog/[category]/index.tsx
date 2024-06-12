import axios from "axios";
import BlogList from "../../../src/components/unit/blog/list/blogList.container"

export async function getStaticPaths() {
    const categories = ["overall", "TypeScript", "Python"]; 
  
    const paths = categories.map(category => ({
      params: { category }
    }));
  
    return {
      paths,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const category = params.category;
  
    const res = await axios.get(process.env.NEXT_PUBLIC_API, {
      params: {
        page: 1,
        categories: category === 'overall' ? '' : category,
        keyword: ''
      }
    });
  
    return {
      props: {
        data: res.data.results,
        total: res.data.count,
        category
      }
    };
  }
const BlogListPage = ({data,total,category}) => {
    return(
        <BlogList
        staticData={data}
        staticTotal={total}
        staticCategories={category}
        />
    )
}
export default BlogListPage