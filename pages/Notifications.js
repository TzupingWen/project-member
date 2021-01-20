import React, {useState, useEffect} from 'react'
import './Member.scss'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import NotifyTabs from '../components/NotifyTabs/NotifyTabs'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function Notifications(props) {
    const {isAuth} = props

    return (
        <>
            <MemberHeader />
            <MyBreadcrumb />
            {/* test */}
            {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
            
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                <NotifyTabs />
            </div>
            </section>
        </>
    )
}

export default Notifications