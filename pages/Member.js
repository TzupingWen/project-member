import React, {useState,useEffect, useContext} from 'react'
import {useHistory,withRouter} from 'react-router-dom'
import './Member.scss'
import MemberHeader from '../components/MemberHeader/MemberHeader'
import MemberAvatar from '../components/MemberAvatar/MemberAvatar'
import MemberContent from '../components/MemberContent/MemberContent'
import LatestNews from '../components/LatestNews/LatestNews'
import AccountView from '../components/AccountView/AccountView'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
//設定側欄連結route
import ProfileEdit from '../components/ProfileEdit/ProfileEdit'
import NotifyTabs from '../components/NotifyTabs/NotifyTabs'
import MyCollectionContent from '../components/MyCollectionContent/MyCollectionContent'
import OrderlistTableRental from '../components/OrderlistTableRental/OrderlistTableRental'
import PurchaseOrderContent from '../components/PurchaseOrderContent/PurchaseOrderContent'
import LessonContent from '../components/LessonContent/LessonContent'
import {useTEST} from '../components/useTEST'
// import MyBreadcrumb from '../components/MyBreadcrumb/MyBreadcrumb'

//測試帳戶資訊
// import AccountViewtest from '../components/AccountView/AccountViewtest'

function Member(props) {
    // test
    const {isAuth, setIsAuth} = props
    const {value, setValue} = useContext(useTEST)
    const [memberData, setMemberData] = useState([])
    const [avatarData, setAvatarData] = useState('')
    const [viewToAvatarData, setViewToAvatarData] = useState('')
    // console.log(props.id)
    // console.log(props.match.params.id)

    useEffect(() => {
        //取該會員的資料
            axios.get(`http://localhost:3001/members/${props.id}`)
            .then((response)=> {
                // console.log(response)

                //有資料的話
                if(response.data){
                    setMemberData(response.data)
                    // setValue([...response.data])
                    // console.log(response.data)

                }
            }).catch((err) => console.log(err))
        
    },[])



    return (
        // <Router>
        <>
        <MemberHeader />
        {/* <MyBreadcrumb /> */}
        <section className="w-wrapper d-flex">
            <div className="w-card">
                <MemberAvatar />
                <MemberContent id={props.id} />
            </div>
            <div className="w-article">
            {/* 連結側欄的路由表 */}
            {/* path還要加上 /member */}
            <Switch>
                <Route path={`/member/${props.id}`}>
                    <LatestNews id={props.id}/>
                    <AccountView id={props.id} data={memberData}/>
                </Route>
                <Route path={`/member/memberedit/${props.id}`}>
                    <ProfileEdit isAuth={isAuth} />
                </Route>
                <Route path={`/member/notifications/${props.id}`}>
                    <NotifyTabs isAuth={isAuth} />
                </Route>
                <Route path={`/member/mycollections/${props.id}`}>
                <MyCollectionContent isAuth={isAuth} />
                </Route>
                <Route path={`/member/rentalorder/${props.id}`}>
                <OrderlistTableRental isAuth={isAuth} />
                </Route>
                <Route path={`/member/purchaseorder/${props.id}`}>
                <PurchaseOrderContent isAuth={isAuth} />
                </Route>
                <Route path={`/member/lesson/${props.id}`}>
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
        // </Router>
    )
}

export default withRouter(Member)