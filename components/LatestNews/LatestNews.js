import React, {useState, useEffect} from 'react'
import './LatestNews.scss'
import { BsChevronRight } from "react-icons/bs"

function LatestNews(props) {
    // const [acNotifyData, setAcNotifyData] = useState([])
    // const [orNotifyData, setOrNotifyData] = useState([])
    // const [leNotifyData, setLeNotifyData] = useState([])

    // async function getMembers(){
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members',
    //             {
    //                 method:'get',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         )
    //         if(response.ok){
    //             const data = await response.json()
    //             console.log('data',data) 
    //             const datas = data[0].notifications_account
    //             console.log('datas',datas)
    //             const orders = data[0].notifications_orders
    //             console.log('orders',orders)
    //             const classsess = data[0].notifications_lesson
    //             console.log('classsess',classsess)
    //             console.log(data)
    //             setAccountNotify(datas)
    //             setOrdersNotify(orders)
    //             setLessonNotify(classsess)
               
    //         } 
    //     } catch(error) {
    //         console.log('error',error)
    //     }
    // }

    // useEffect(()=>{
    //     getMembers()
    // },[])

    return (
        <>
            <div className="w-latestnews">
                <div className="w-div-title">
                    <p>最新消息</p>
                </div>
                <div className="w-news-main">
                    <p>【帳戶通知】您在2021年1月29日修改了個人檔案
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>【訂單通知】您在2021年1月29日訂購了琴葉榕大型植栽
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>【預約通知】您在2021年1月29日預約了仙人掌花圈手作課
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default LatestNews