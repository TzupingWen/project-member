import React, {useState,useEffect, useMemo} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom' 

// route要修改！！
import Member from './pages/Member'
import MemberEditProfile from './pages/MemberEditProfile'
import Notifications from './pages/Notifications'
import MyCollections from './pages/MyCollections'
import RentalOrder from './pages/RentalOrder'
import PurchaseOrder from './pages/PurchaseOrder'
import Lesson from './pages/Lesson'
import LessonDetail from './pages/LessonDetail'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import {useTEST} from './components/useTEST'
import axios from 'axios'
function App() {
  const [value, setValue] =useState([])
  const memberDetail = useMemo(()=>({value, setValue}),[value, setValue])
  const [isAuth, setIsAuth] = useState(false)
  const member_id = 1
  
  // useEffect(() => {
  //   //取該會員的資料
  //       axios.get(`http://localhost:3001/members/${member_id}`)
  //       .then((response)=> {
  //           console.log(response)
            
  //       }).catch((err) => console.log(err))
    
  // },[])

  return (
    <>
    <Router>
    {/* <Link to="/lesson/lessondetail">課程預約詳情</Link>
    <Link to="/lesson">課程預約管理</Link> */}
      <useTEST.Provider value={memberDetail}>
      <Switch>

          {/* ！！Route path都要修改！！ */}
          
          {/* 首頁/會員中心/課程預約管理/課程預約詳情 */}
          <Route exact path="/member/lesson/:id?/lessondetail/:course_id">
            <LessonDetail isAuth={isAuth} id={member_id}/>
          </Route>
          {/* 首頁/會員中心 */}
          <Route exact path="/member/:id?">
            <Member isAuth={isAuth} setIsAuth={setIsAuth} id={member_id} />
          </Route>
          {/* 下列path前面要加上 /member */}
          {/* 首頁/會員中心/編輯個人檔案 */}
          <Route exact path="/member/memberedit/:id?">
            <MemberEditProfile isAuth={isAuth} id={member_id}/>
          </Route>
          {/* 首頁/會員中心/訊息通知 */}
          <Route exact path="/member/notifications/:id?">
            <Notifications isAuth={isAuth} id={member_id} />
          </Route>
          {/* 首頁/會員中心/我的收藏 */}
          <Route exact path="/member/mycollections/:id?">
            <MyCollections isAuth={isAuth} id={member_id}/>
          </Route>
          {/* 首頁/會員中心/租賃訂單管理 */}
          <Route exact path="/member/rentalorder/:id?">
            <RentalOrder isAuth={isAuth} id={member_id} />
          </Route>
          {/* 首頁/會員中心/選購訂單管理 */}
          <Route exact path="/member/purchaseorder/:id?">
            <PurchaseOrder isAuth={isAuth} id={member_id} />
          </Route>
          {/* 首頁/會員中心/課程預約管理 */}
          <Route exact path="/member/lesson/:id?">
            <Lesson isAuth={isAuth}  id={member_id}/>
          </Route>
          
          {/* 以下path不需改 */}
          {/* 首頁/註冊會員 */}
          <Route path="/register">
            <Register isAuth={isAuth} />
          </Route>
          {/* 首頁/忘記密碼 */}
          <Route path="/forgotpassword">
            <ForgotPassword isAuth={isAuth} />
          </Route>
          {/* 首頁/重設密碼 */}
          <Route path="/resetpassword">
            <ResetPassword isAuth={isAuth} />
          </Route>

      </Switch>
      </useTEST.Provider>
      </Router>
      </>   
  );
}

export default App;
