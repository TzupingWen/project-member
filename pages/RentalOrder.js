import React, { useState } from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import OrderlistTableRental from '../components/OrderlistTableRental/OrderlistTableRental'
import {withRouter} from 'react-router-dom'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function RentalOrder(props) {
    // const {isAuth} = props
    // console.log('this?',props)
    // console.log('id?',props.match.params.id)

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
                <OrderlistTableRental id={props.match.params.id}/>
            </div>
            </section>
        </>
    )
}

export default withRouter(RentalOrder)