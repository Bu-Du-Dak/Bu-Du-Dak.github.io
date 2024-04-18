import { useRouter } from "next/router"
import WorksUI from "./works.presenter"

const Works = () => {
    const router = useRouter()
    return(
        <WorksUI
            year = {router.query.year}
        />
    )
}
export default Works