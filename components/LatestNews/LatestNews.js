import React, {useState, useEffect} from 'react'
import './LatestNews.scss'
import { BsChevronRight } from "react-icons/bs"

function LatestNews(props) {
    // const [members, setMembers] = useState([])
    const [acNotifyData, setAcNotifyData] = useState([])
    const [orNotifyData, setOrNotifyData] = useState([])
    const [leNotifyData, setLeNotifyData] = useState([])

    // async function getMembers() {
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
    //         if(response.ok) {
    //             const data = await response.json()
    //             // console.log(data)
    //             const datas1 = await response.json()
    //             const datas2 = await response.json()
    //             const datas3 = await response.json() 

    //             setAcNotifyData(datas1)
    //             setOrNotifyData(datas2)
    //             setLeNotifyData(datas3)
    //         }
    //     } catch(error) {
    //         alert('no data, try later')
    //     }
    // }

    useEffect(()=>{
        // getMembers()
    },[])

    return (
        <>
            <div className="w-latestnews">
                <div className="w-div-title">
                    <p>最新消息</p>
                </div>
                <div className="w-news-main">
                    <p>【帳戶通知】您在2020年12月1日修改了個人檔案
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>【訂單通知】您在2020年12月1日訂購了琴葉榕大型植栽
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                    <hr/>
                    <p>【預約通知】您在2020年12月1日預約了雞蛋花手作課程
                    <BsChevronRight className="w-iconright" size="20" />
                    </p>
                </div>
            </div>
        </>
    )
}

export default LatestNews