import React, {useState,useEffect} from 'react'
import './LessonDetailContent.scss'

// 測試data
// import data from '../../data/lessondata'

function LessonDetailContent(props) {
    const [lessonDetail, setLessonDetail] = useState([])

    async function getMembers(){
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                }
            )
            if(response.ok){
                const data = await response.json()
                const datas = data[0].lesson_booking

                console.log(data)
                // setLessonbookings(datas)
                
            } 
        } catch(error) {
            alert('no data')
        }
    }

    useEffect(()=>{
        getMembers()
    },[])

    return (
        <>
        <div>
                <div className="w-div-title pl-4">
                    <p>課程預約詳情</p>
                </div>
                <div className="w-lessonbooking">
                    <table className="table table-borderless w-lessonbooking-detail-table">
                        <tbody>
                        {}
                            <tr>
                                <th scope="row">課程名稱：</th>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <th scope="row">課程時間：</th>
                                <td>{} {}</td>
                            </tr>
                            <tr>
                                <th scope="row">課程費用：</th>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <th scope="row">預約狀態：</th>
                                <td className="w-booking-status">{}</td>
                            </tr>
                            <tr>
                                <th scope="row">上課地點：</th>
                                <td>{}</td>
                            </tr>
                            <tr>
                                <th scope="row">備註：</th>
                                <td>{}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img className="w-lessondetailpics" src="images/member/多肉玻璃屋手作課02.jpg" alt="" />
                </div>
            </div>
        </>
    )
}

export default LessonDetailContent