import React from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LessonDetailContent from '../components/LessonDetailContent/LessonDetailContent'
import {withRouter} from 'react-router-dom'

function LessonDetail(props) {
    const {isAuth} = props

    return (
        <>
        <MemberHeader />
        {/* <MyBreadcrumb /> */}
        {/* test */}
        {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
        
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">

                <LessonDetailContent data={props} />  
            </div>
            </section>
        </>
    )
}

export default withRouter(LessonDetail)