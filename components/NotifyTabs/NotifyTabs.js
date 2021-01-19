import React, {useState,useEffect} from 'react'
import './NotifyTabs.scss'
import {Tabs, Tab} from 'react-bootstrap'
import ClicktoRemoveButton from '../ClicktoRemoveButton/ClicktoRemoveButton'

function NotifyTabs() {
    // Tab對應的eventKey
    const [key, setKey] = useState('accountnotifyTab')

    // Tab內容
    const [accountNotify, setAccountNotify] = useState([])
    const [ordersNotify, setOrdersNotify] = useState([])
    const [lessonNotify, setLessonNotify] = useState([])

    

    async function deleteMembers(id){
        try {
            const response = await fetch(
                'http://localhost:3001/members/delete/' + id,
                {
                    method:'delete',
                }
            )
            if(response.ok){
                const data = await response.json()
                const datas1 = data[0].notifications_account
                
                setAccountNotify(datas1)
                getMembers()
                
            } 
        } catch(error) {
            alert('no data')
            console.log(error)
        }
    }

    async function getMembers(){
        try {
            const response = await fetch(
                'http://localhost:3001/members',
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                const data = await response.json()
                // console.log(data) 
                const datas = data[0].notifications_account
                const orders = data[0].notifications_orders
                const classsess = data[0].notifications_lesson

                // console.log(data)
                setAccountNotify(datas)
                setOrdersNotify(orders)
                setLessonNotify(classsess)
                // console.log(response.data[0].notifications_account)
            } 
        } catch(error) {
            alert('no data')
        }
    }

    async function getMember(id){
        try {
            const response = await fetch(
                'http://localhost:3001/members/get/' + id,
                {
                    method:'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
            if(response.ok){
                const data = await response.json()
                const datas = data[0].notifications_account
                const orders = data[0].notifications_orders
                const classsess = data[0].notifications_lesson

                // console.log(data)
                setAccountNotify(datas)
                setOrdersNotify(orders)
                setLessonNotify(classsess)
                // console.log(response.data[0].notifications_account)
            } 
        } catch(error) {
            alert('no data')
        }
    }

    useEffect(()=>{
        getMembers()
    },[])


    return (
        <>
            <div>
                <div className="w-div-title">
                    <p>訊息通知</p>
                </div>
                <div className="w-notify-main">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)} 
                    >
                    <Tab tabClassName="w-notifytabtitle" eventKey="accountnotifyTab" title="帳戶通知">
                        
                        {accountNotify.map((v, i) => {
            return (
                <div className="w-notifydiv" key={i}>
                        <table className="table table-borderless w-notify-table">
                                <tbody>
                                    <tr id="w-notifytbodytr1">
                                        <td style={{width: 150, textAlign: 'center'}}>
                                        {v.accountnotify_title}
                                        </td>
                                        <td style={{width: 500, textAlign: 'left'}}>
                                        {v.accountnotify_content}
                                        </td>
                                        <td>
                                        <ClicktoRemoveButton />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
            )
        })}
                    </Tab>
                    <Tab tabClassName="w-notifytabtitle" eventKey="orderlistnotifyTab" title="訂單通知">
                        {ordersNotify.map((v, i) => {
            return (
                <div className="w-notifydiv" key={i}>
                        <table className="table table-borderless w-notify-table">
                                <tbody>
                                    <tr>
                                        <td style={{width: 150, textAlign: 'center'}}>
                                        {v.orderlistnotify_title}
                                        </td>
                                        <td style={{width: 500, textAlign: 'left'}}>
                                        {v.orderlistnotify_content}
                                        </td>
                                        <td>
                                        <ClicktoRemoveButton 
                                            onClick={()=>{
                                                deleteMembers()
                                            }}
                                        />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
            )
        })}
                    </Tab>
                    <Tab tabClassName="w-notifytabtitle" eventKey="lessonnotifyTab" title="課程通知">
                        {lessonNotify.map((v, i) => {
            return (
                <div className="w-notifydiv" key={i}>
                        <table className="table table-borderless w-notify-table">
                                <tbody>
                                    <tr>
                                        <td style={{width: 150, textAlign: 'center'}}>
                                        {v.lessonnotify_title}
                                        </td>
                                        <td style={{width: 500, textAlign: 'left'}}>
                                        {v.lessonnotify_content}
                                        </td>
                                        <td>
                                        <ClicktoRemoveButton 
                                            onClick={()=>{
                                                deleteMembers()
                                            }}
                                        />
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
            )
        })}
                    </Tab>
                </Tabs>
                </div>
            </div>
                
        </>
    )
}

export default NotifyTabs