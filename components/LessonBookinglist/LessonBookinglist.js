import React, {useState,useEffect} from 'react'
// import LessonBookinglistTbodyTr from '../LessonBookinglistTbodyTr/LessonBookinglistTbodyTr'
import './LessonBookinglist.scss'
import ClicktoLessonButton from '../ClicktoLessonButton/ClicktoLessonButton'

function LessonBookinglist(props) {
    const [lessonbookings, setLessonbookings] = useState([])

    async function deleteCourse(index) {
        const member_id = 1
        try {
            const response = await fetch (
                'http://localhost:3001/members/deleteCourse/' + index + '/' + member_id,
                {
                    method:'delete',
                }
            )
            if(response.ok){
                // 重新載入頁面
                const data = await response.json()
                const datas = data[0].course_booking

                // console.log(data)
                setLessonbookings(datas)
                
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    async function getMembers(){
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

                console.log('data?',data)
                console.log('datas?',datas)
                
                setLessonbookings(datas)
                
                
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(()=>{
        getMembers()
    },[])


    return (
        <>
        <table className="table table-responsive w-lessonbookinglisttable">
                        <thead style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 50}}>No.</th>
                                <th scope="col" style={{width: 200}}></th>
                                <th scope="col" style={{width: 200}}>課程名稱</th>
                                <th scope="col" style={{width: 150}}>課程時間</th>
                                <th scope="col" style={{width: 100}}>課程費用</th>
                                <th scope="col" style={{width: 100}}>狀態</th>
                                <th scope="col" style={{width:50}}></th>
                            </tr>
                        </thead>
                        <tbody className="w-lessonbookinglisttbody">
                        {lessonbookings.map((v,i)=>{
                            return(
                                <tr key={i}>
                        {/* 課程No. */}
                        <td className="align-middle">{v.lesson_number}</td>                    
                        {/* 課程縮圖 */}
                        <td className="align-middle">      
                        <div>
                        <img className="w-lessonpics" src={v.lesson_pics} alt="" />                           
                        </div>                        
                        {/* 課程名稱 */}
                        </td>
                        <td className="w-lessonname align-middle">{v.lesson_name}</td>                    
                        {/* 課程時間 */}
                        <td className="w-lessontime align-middle">                   
                        {v.lesson_date}<br/>{v.lesson_time}
                        </td>            
                        {/* 課程費用 */}
                        <td className="align-middle" style={{color: '#838383'}}>{v.lesson_price}</td>                    
                        {/* 課程狀態 */}
                        <td className="w-lessonstatus-booked align-middle">{v.lesson_status}</td>
                        {/* 課程詳情&取消預約按鈕 */}
                        <td className="align-middle">
                        <ClicktoLessonButton />
                        {/* <ClickCancelButton 
                            onClick={() => {
                                deleteMember()
                            }}
                        /> */}
                        <button 
                            type="button" 
                            className="w-btn-cancellesson"
                            onClick={()=>{deleteCourse({i})}}
                            >取消預約</button> 
                        </td>
                        </tr>
                            )
                        })}
                                    </tbody>
                                </table>
                                
        </>
    )
}

export default LessonBookinglist