import React, {useState,useEffect} from 'react'
import './LessonContent.scss'
import LessonNone from '../LessonNone/LessonNone'
import LessonBookinglist from '../LessonBookinglist/LessonBookinglist'

function LessonContent() {
    const [data, setData] = useState(false)

    const display = <LessonBookinglist />
    const none = <LessonNone />

    return (
        <>
        <div>
        <div className="w-div-title pl-4">
            <p>課程預約管理</p>
        </div>
                <div className="w-orderlist-main px-2">
                    {/* 有預約課程則顯示LessonBookinglist元件，無預約則顯示LessonNone元件 */}
                    {data ? none : display}
                    {/* <LessonBookinglist /> */}
                    {/* <LessonNone /> */}
                </div>
            </div>
        </>
    )
}

export default LessonContent