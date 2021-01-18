import React, {useState} from 'react'
import './LessonNone.scss'
import { NavLink } from 'react-bootstrap'

function LessonNone() {
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有預約課程，來去逛逛吧</p>
            <div>        
                <NavLink to="/lesson" className="w-btn-viewlesson">教學課程</NavLink>                
            </div>   
        </div>
        </>
    )
}

export default LessonNone