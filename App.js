import React from 'react'
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

function App() {
  return (
    <>
    <Router>
  
      <Switch>
          {/* ！！Route path都要修改！！ */}
          {/* 首頁/會員中心 */}
          <Route path="/member">
            <Member />
          </Route>
          {/* 下列path前面要加上 /member */}
          {/* 首頁/會員中心/編輯個人檔案 */}
          <Route path="/memberedit">
            <MemberEditProfile />
          </Route>
          {/* 首頁/會員中心/訊息通知 */}
          <Route path="/notifications">
            <Notifications />
          </Route>
          {/* 首頁/會員中心/我的收藏 */}
          <Route path="/mycollections">
            <MyCollections />
          </Route>
          {/* 首頁/會員中心/租賃訂單管理 */}
          <Route path="/rentalorder">
            <RentalOrder />
          </Route>
          {/* 首頁/會員中心/選購訂單管理 */}
          <Route path="/purchaseorder">
            <PurchaseOrder />
          </Route>
          {/* 首頁/會員中心/課程預約管理/課程預約詳情 */}
          <Route path="/lesson/lessondetail">
            <LessonDetail />
          </Route>
          {/* 首頁/會員中心/課程預約管理 */}
          <Route path="/lesson">
            <Lesson />
          </Route>
          
          {/* 以下path不需改 */}
          {/* 首頁/註冊會員 */}
          <Route path="/register">
            <Register />
          </Route>
          {/* 首頁/忘記密碼 */}
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          {/* 首頁/重設密碼 */}
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>

      </Switch>
      </Router>
      </>   
  );
}

export default App;
