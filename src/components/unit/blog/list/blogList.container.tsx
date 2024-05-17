import { useRouter } from "next/router"
import BlogListUI from "./blogList.presenter"

const BlogList = () => {
    const router = useRouter()
    return(
        <BlogListUI
            title={String(router.query.category)}
        />
    )
}
export default BlogList