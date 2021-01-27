import React, {useState} from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LessonContent from '../components/LessonContent/LessonContent'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'
import {withRouter} from 'react-router-dom'

function Lesson(props) {
    // console.log('props?',props)

    return (
        <>
        {/*  */}
         <MemberHeader />
         {/* <MyBreadcrumb /> */}
         {/* --測試登入狀態-- */}
         {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
         {/* --test-- */}

            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent id={props.id}/>
            </div>
            <div className="w-article">
                <LessonContent id={props.match.params.id} />
            </div>
            </section>
        </> 
    )
}

export default withRouter(Lesson)