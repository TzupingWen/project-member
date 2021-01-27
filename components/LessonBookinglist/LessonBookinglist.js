import React, {useState,useEffect} from 'react'
import './LessonBookinglist.scss'
import {NavLink, useHistory, withRouter} from 'react-router-dom'
import LessonNone from '../LessonNone/LessonNone'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

function LessonBookinglist(props) {
    const id = props.match.params.id
    // console.log('??',id)
    // let course_id = props.match.params.course_id
    // const new_course_id = course_id.slice(1,2)


    const [lessonbookings, setLessonbookings] = useState([])
    
    // sweet alert
    const MySwal = withReactContent(Swal)

    let history = useHistory()


    async function deleteCourse(index) {
        try {
            const response = await fetch (
                'http://localhost:3001/members/deleteCourse/' + index + '/' + id,
                {
                    method:'delete',
                }
            )
            if(response.ok){
                // 重新載入
                getCourse(id)

                history.push('/member/lesson/' +id)
                
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(()=> {
        axios.get(`http://localhost:3001/members/lesson/${id}`)
        .then((response) => {
            console.log(response)
            if(response.data) {
                setLessonbookings(response.data)
            }
        })
        .catch((err) => console.log(err))
    },[])

    async function getCourse(id){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                const data = await response.json()
                const datas = data.course_booking
                // console.log('data?',data)
                // console.log('datas?',datas[0].lesson_number)
                console.log('datas?',datas.map((item) => item.lesson_number))
                
                setLessonbookings(datas)
            } 
        } catch(error) {
            console.log('error:',error)
        }
    }

    useEffect(()=>{
        getCourse(id)
    },[])

    const display = (
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
                        <img className="w-lessonpics" src={v.img} alt="" />                           
                        </div>                        
                        {/* 課程名稱 */}
                        </td>
                        <td className="w-lessonname align-middle">{v.name}</td>                    
                        {/* 課程時間 */}
                        <td className="w-lessontime align-middle">                   
                        {v.date}<br/>{v.hours}
                        </td>            
                        {/* 課程費用 */}
                        <td className="align-middle" style={{color: '#838383'}}>NT$ {v.price}</td>                    
                        {/* 課程狀態 */}
                        <td className="w-lessonstatus-booked align-middle">{v.lesson_status}</td>
                        {/* 課程詳情&取消預約按鈕 */}
                        <td className="align-middle">
                        {/* <ClicktoLessonButton /> */}
                        <NavLink to={`/member/lesson/${id}/lessondetail/${v.lesson_number}`} className="w-btn-lessondetail">課程詳情</NavLink>
                        <button
                                            type="button" 
                                            className="w-btn-cancellesson"  
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否取消預約？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要取消!',
                                                    cancelButtonText: '返回'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteCourse(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            取消預約
                                        </button>
                        </td>
                        </tr>
                            )
                        })}
                                    </tbody>
                                </table>
                                
        </>
    )

    const none = (
        <LessonNone />
    )

    return (
        <>
        {lessonbookings == 0 ? none : display }
        </>
    )
}

export default  withRouter(LessonBookinglist)