import React from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import PurchaseOrderContent from '../components/PurchaseOrderContent/PurchaseOrderContent'
import {withRouter} from 'react-router-dom'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function PurchaseOrder(props) {
    console.log('props?',props)
    const id = props.match.params.id
    console.log('???',id)
    
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
                <PurchaseOrderContent id={props.match.params.id}/>
            </div>
            </section>
        </>
    )
}

export default withRouter(PurchaseOrder)