import React, {useEffect, useState} from 'react'
import './SignUp.scss'
import {withRouter, useHistory} from 'react-router-dom'

function SignUp() {
  // const [members, setMembers] = useState([])

  const [member_Account, setMember_Account] = useState('')
  const [member_Password, setMember_Password] = useState('')
  const [member_Gender, setMember_Gender] = useState('')
  const [member_Birthdate, setMember_Birthdate] = useState('')

  let history = useHistory()

  // async function updateMember() {
  //   // 要送到伺服器的data
  //   const newMember = {
  //     member_Account,
  //     member_Password,
  //     member_Gender,
  //     member_Birthdate
  //   }

  //   try {
  //     //伺服器端
  //     const response = await fetch(
  //       'http://localhost:3001/members/add',
  //       {
  //         method: 'post',
  //         body: JSON.stringify(newMember),
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     )

  //     if (response.ok) {
  //       const data = await response.json()
  //       console.log(data)

  //       history.push('/members')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  useEffect(()=>{
    // updateMember()
  },[])

    return (
        <>
        <div className="w-container__form w-signup01">
      <form action="#" className="w-form" id="form1">
        <h2 className="w-form__title">註冊 Sign Up</h2>
        <div className="form-group">
          <label htmlFor="">建立帳號 Account</label>
          <input 
            type="email" 
            placeholder="請輸入您的E-mail" 
            className="form-control w-input" 
            value={member_Account} 
            onChange={(e)=>setMember_Account(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="">密碼 Password</label>
          <small id="passwordinputnumber" className="form-text">*請輸入介於8-20位數之間密碼，需同時包含英文和數字。</small>
          <input 
            type="password" 
            placeholder="請輸入密碼" 
            className="form-control w-input"
            maxLength="20" 
            value={member_Password}
            onChange={(e)=>setMember_Password(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="">確認密碼 Password</label>
          <input 
            type="password" 
            placeholder="再次輸入密碼" 
            className="form-control w-input" 
            value={member_Password}
            onChange={(e)=>setMember_Password(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="">性別 Gender</label>
          <select 
            className="form-control" 
            value={member_Gender}
            onChange={(e)=>setMember_Gender(e.target.value)}>
            <option>不透露</option>
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">出生日期 Birth Date</label>
          <div className="d-flex">
            <input 
              type="date" 
              placeholder="yyyy-mm-dd" 
              className="form-control" 
              value={member_Birthdate}
              onChange={(e)=>setMember_Birthdate(e.target.value)}
              />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="" />
            <label className="form-check-label" htmlFor="">
              我已閱讀並同意遵守 <a className="w-form-checkbox-a">商店服務條款</a> 與 <a
                className="w-form-checkbox-a">會員責任規範及個資聲明。</a>
            </label>
          </div>
        </div>
        <button
          className="w-btn-clicksend"
          >
          確認送出 Send
          </button>
        <div className="d-flex w-signbtns">
          <button className="w-btn-facebook">使用facebook帳號註冊</button>
          <button className="w-btn-google">使用Google帳號註冊</button>
        </div>
      </form>
    </div>
        </>
    )
}

export default withRouter(SignUp)