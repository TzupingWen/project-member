import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LatestNews from '../components/LatestNews/LatestNews'
import AccountView from '../components/AccountView/AccountView'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//設定側欄連結route
import ProfileEdit from '../components/ProfileEdit/ProfileEdit'
import NotifyTabs from '../components/NotifyTabs/NotifyTabs'
import MyCollectionContent from '../components/MyCollectionContent/MyCollectionContent'
import OrderlistTableRental from '../components/OrderlistTableRental/OrderlistTableRental'
import PurchaseOrderContent from '../components/PurchaseOrderContent/PurchaseOrderContent'
import LessonContent from '../components/LessonContent/LessonContent'
import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

//測試帳戶資訊
// import AccountViewtest from '../components/AccountView/AccountViewtest'

function Member(props) {
    // test
    const {isAuth, setIsAuth} = props

    return (
        <Router>
        <>
        <MemberHeader />
        <MyBreadcrumb />
        <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent />
            </div>
            <div className="w-article">
            {/* 連結側欄的路由表 */}
            {/* path還要加上 /member */}
            <Switch>
                <Route path="/member">
                    <LatestNews />
                    <AccountView />

                    {/* --這個是測試帳戶概覽-- */}
                    {/* <AccountViewtest /> */}
                    {/* --這個是測試帳戶概覽-- */}

                </Route>
                <Route path="/memberedit">
                    <ProfileEdit isAuth={isAuth} />
                </Route>
                <Route path="/notifications">
                    <NotifyTabs isAuth={isAuth} />
                </Route>
                <Route path="/mycollections">
                <MyCollectionContent isAuth={isAuth} />
                </Route>
                <Route path="/rentalorder">
                <OrderlistTableRental isAuth={isAuth} />
                </Route>
                <Route path="/purchaseorder">
                <PurchaseOrderContent isAuth={isAuth} />
                </Route>
                <Route path="/lesson">
                <LessonContent isAuth={isAuth} />
                </Route>
            </Switch>  
            </div>
        </section>

        {/* --test-- */}
        {/* <button
            onClick={()=>{
                setIsAuth(true)
            }}>登入</button>
        {isAuth ? '會員登入，你好' : '未登入'} */}
        {/* --test-- */}
        
        </>
        </Router>
    )
}

export default Member