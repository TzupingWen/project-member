import React, {useState} from 'react'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MyCollectionContent from '../components/MyCollectionContent/MyCollectionContent'
import {withRouter} from 'react-router-dom'
import './Member.scss'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function MyCollections(props) {
    // const {isAuth} = props
    // console.log('???',props)
    const id = props.match.params.id
    console.log('id?',id)

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
                <MyCollectionContent id={props.match.params.id}/>
            </div>
        </section>
        </>
    )
}

export default withRouter(MyCollections)