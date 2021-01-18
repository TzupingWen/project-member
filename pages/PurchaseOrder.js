import React from 'react'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import PurchaseOrderContent from '../components/PurchaseOrderContent/PurchaseOrderContent'
import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

function PurchaseOrder() {
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
                <PurchaseOrderContent />
            </div>
            </section>
        </>
    )
}

export default PurchaseOrder