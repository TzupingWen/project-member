import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import ProfileEdit from '../components/ProfileEdit/ProfileEdit'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

// 測試編輯資料
// import ProfileEdittest from '../components/ProfileEdit/ProfileEdittest'

function MemberEditProfile(props) {
    console.log('hi',props)
    console.log(props.match.params.id)
    return (
        <>
            <MemberHeader />
            {/* <MyBreadcrumb /> */}
            {/* --test-- */}
            {/* {isAuth ? '會員登入，xxx你好' : '未登入'} */}
            
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent  id={props.id}/>
            </div>
            <div className="w-article">
                <ProfileEdit id={props.match.params.id} />

                {/* --測試資料-- */}
                {/* <ProfileEdittest /> */}
                {/* --測試資料-- */}

            </div>
            </section>
        </>
    )
}

export default withRouter(MemberEditProfile)