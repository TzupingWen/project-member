import React, {useState,useEffect} from 'react'
import './LessonDetailContent.scss'

// 測試data
// import data from '../../data/lessondata'

    function LessonDetailContent() {
    const [lessonDetail, setLessonDetail] = useState([])

    async function getMember(){
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                    // headers: {
                    //     Accept: 'application/json',
                    //     'Content-Type': 'application/json',
                    // },
                }
            )
            if(response.ok){
                const data = await response.json()
                const datas = data[0].course_booking

                console.log(data)
                setLessonDetail(datas)
                
            } 
        } catch(error) {
            alert('no data')
        }
    }

    useEffect(()=>{
        getMember()
    },[])


   
    return (
        <>
        {lessonDetail.map((classes)=>{
            return(
                <div key={classes.id}>
                <div className="w-div-title pl-4">
                    <p>課程預約詳情</p>
                </div>
                <div className="w-lessonbooking">
                    <table className="table table-borderless w-lessonbooking-detail-table">
                        <tbody>
                                <div>
                                <tr>
                                    <th scope="row">課程名稱：</th>
                                    <td>{classes.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">課程時間：</th>
                                    <td>{classes.date} {classes.lesson_time}</td>
                                </tr>
                                <tr>
                                    <th scope="row">課程費用：</th>
                                    <td>NT$ {classes.price}</td>
                                </tr>
                                <tr>
                                    <th scope="row">預約狀態：</th>
                                    <td className="w-booking-status">{classes.lesson_status}</td>
                                </tr>
                                <tr>
                                    <th scope="row">上課地點：</th>
                                    <td>{classes.lesson_location}</td>
                                </tr>
                                <tr>
                                    <th scope="row">備註：</th>
                                    <td>{classes.lesson_note}</td>
                                </tr>
                                </div>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img className="w-lessondetailpics" src={classes.img} alt="" />
                </div>
            </div>
            )
        })}
        </>
    )
    
}

export default LessonDetailContent