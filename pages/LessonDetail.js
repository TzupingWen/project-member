import React from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LessonDetailContent from '../components/LessonDetailContent/LessonDetailContent'

function LessonDetail() {
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
            <LessonDetailContent />
            </div>
            </section>
        </>
    )
}

export default LessonDetail