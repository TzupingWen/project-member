import React, {useState, useEffect} from 'react'
import './Member.scss'
import {withRouter} from 'react-router-dom'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import NotifyTabs from '../components/NotifyTabs/NotifyTabs'
import MemberHeader from '../components/MemberHeader/MemberHeader'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function Notifications(props) {
    // const {isAuth} = props
    // console.log('test',props)

    return (
        <>
            <MemberHeader />
            {/* <MyBreadcrumb /> */}
            {/* test */}
            {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
            
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent id={props.id}/>
            </div>
            <div className="w-article">
                <NotifyTabs id={props.match.params.id}/>
            </div>
            </section>
        </>
    )
}

export default withRouter(Notifications)