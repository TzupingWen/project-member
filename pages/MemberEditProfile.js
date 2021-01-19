import React, {useState} from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import ProfileEdit from '../components/ProfileEdit/ProfileEdit'
import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

// 測試編輯資料
import ProfileEdittest from '../components/ProfileEdit/ProfileEdittest'

function MemberEdit() {

    return (
        <>
            <MemberHeader />
            <MyBreadcrumb />
            <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
                {/* <ProfileEdit /> */}

                {/* 測試資料 */}
                <ProfileEdittest />
                {/* 測試資料 */}

            </div>
            </section>
        </>
    )
}

export default MemberEdit