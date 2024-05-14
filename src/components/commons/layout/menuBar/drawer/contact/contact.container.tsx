import ContactUI from "./contact.presenter"
import {message} from 'antd'
const Contact = ({noTitle}:{noTitle?:boolean}) => {
    const [messageApi,contextHolder]=message.useMessage()
    const onClickItems = (id:string) => {
        if(id==='email') {
            navigator.clipboard.writeText('guri930219@gmail.com')
            messageApi.success('주소가 복사되었습니다!')
        }
        else if(id==='phone') {
            navigator.clipboard.writeText('01092875350')
            messageApi.success('번호가 복사되었습니다!')
        }
    }
    return(
        <>
        {contextHolder}
        <ContactUI noTitle={noTitle} onClickItems={onClickItems}/>
        </>
    )
}
export default Contact