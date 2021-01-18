import React, {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './AccountView.scss'
import {useParams,useHistory} from 'react-router-dom'

//測試
// import data from '../../data/users'

function AccountView() {
    // const [members, setMembers] = useState()
    const initialMember = {
        member_Account:"",
        member_Name:"",
        member_Gender:"",
        member_Phone:"",
        member_Birthdate:"",
        member_Address:""
    }
    
    
    const [member, setMember] = useState(initialMember)


    // const [member_Account, setMember_Account] = useState('')
    // const [member_Name, setMember_Name] = useState('')
    // const [member_Gender, setMember_Gender] = useState('')
    // const [member_Phone, setMember_Phone] = useState('')
    // const [member_Birthdate, setMember_Birthdate] = useState('')
    // const [member_Address, setMember_Address] = useState('')

    // let {id} = useParams()
    let history = useHistory()

    // async function getMembers() {
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members',
    //             {
    //                 method:'get',
    //             }
    //         )
    //         if(response.ok) {
    //             const data = await response.json()

    //             setMembers(data)
    //         }
    //     } catch(error) {
    //         alert('no data, try later')
    //     }
    // }

    async function getMember() {
        try {
            const response = await fetch(
                `http://localhost:3001/members/get/`,
                {
                    method:'get',
                }
            )
            if(response.ok) {
                const data = await response.json()
                
                // setMember(data)
            }
        } catch(error) {
            alert('no data, try later')
        }
    }

    useEffect(()=>{
        getMember()
    },[])
    
    return (
        <>
            {member.map((v,i) => {
                {/* console.log(data) */}
                
                return(
                <div className="w-account-view">
                <div className="w-div-title">
                    <p>帳戶概覽</p>
                </div>
                <div className="w-account-view-main">
                    <form action="">
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">帳號 Account</label>
                            <div className="col-sm-8">
                                <input 
                                    type="email" readonly 
                                    className="form-control-plaintext" 
                                    value={v.member_account} 
                                    // onChange={(e)=>(setMember_Account(e.target.value))}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">姓名 Name</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={v.member_name}
                                    // onChange={(e)=>(setMember_Name(e.target.value))} 
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">性別 Gender</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={v.member_gender}
                                    // onChange={(e)=>(setMember_Gender(e.target.value))} 
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">手機號碼 Phone</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={v.member_phone}
                                    // onChange={(e)=>(setMember_Phone(e.target.value))} 
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-form-label">出生日期 Birth Date</label>
                            <div className="col-sm-8">
                                <input 
                                    type="text" readonly 
                                    className="form-control-plaintext" 
                                    value={v.member_birthdate}
                                    // onChange={(e)=>(setMember_Birthdate(e.target.value))} 
                                    />
                            </div>
                        </div>
                    </form>
                    <NavLink to="/memberedit" className="w-accounteditbutton">編輯個人檔案 Edit</NavLink>
                </div>
            </div>
                )
            })}
        </>
    )
}

export default AccountView