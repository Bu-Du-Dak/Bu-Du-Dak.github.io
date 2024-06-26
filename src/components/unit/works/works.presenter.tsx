import SectionPage from "../Section/Section.index"
import Year2021 from "./years/2021/2021.container"
import Year2022 from "./years/2022/2022.container"
import Year2023 from "./years/2023/2023.container"
import Year2024 from "./years/2024/2024.container"

const WorksUI = ({year}) => {
    const getComponent = () => {
        switch(year){
            case '2024': return <Year2024/>
            case '2023': return <Year2023/>
            case '2022': return <Year2022/>
            case '2021': return <Year2021/>
            default:
                return <>Loading...</>
        }
    }
    return(
        <SectionPage title={`부리가 두꺼운 닭의 ${year}년`} Component={getComponent()||<>loading</>}/>
    )
}
export default WorksUI