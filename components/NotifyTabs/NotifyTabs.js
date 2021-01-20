import React, {useState,useEffect} from 'react'
import './NotifyTabs.scss'
import {Tabs, Tab} from 'react-bootstrap'


function NotifyTabs() {
    // Tab對應的eventKey
    const [key, setKey] = useState('accountnotifyTab')

    // Tab內容
    const [accountNotify, setAccountNotify] = useState([])
    const [ordersNotify, setOrdersNotify] = useState([])
    const [lessonNotify, setLessonNotify] = useState([])
    // const [childData , setChildData] = useState()


    // x 未取得members內的訊息
    // async function deleteMembers(){
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members/delete/1',
    //             {
    //                 // method:'delete',
    //                 method:'put'
    //             }
    //         )
    //         if(response.ok){
    //             const data = await response.json()
    //             // data是所有會員資料
    //             const datas1 = data[0].notifications_account
    //             console.log(datas1)
    //             const orders = data[0].notifications_orders
    //             console.log(orders)
    //             const classsess = data[0].notifications_lesson
    //             console.log(classsess)
                
    //             setAccountNotify(null)
    //             setOrdersNotify(null)
    //             setLessonNotify(null)

    //             // getMembers()

    //         } 
    //     } catch(error) {
    //         console.log('error',error)
    //     }
    // }

    async function deleteNotifications(index){
        // 目前member_id取固定值
        const member_id = 1
        try {
            const response = await fetch(
                'http://localhost:3001/members/deleteNotifications/' + index + '/' + member_id,
                {
                    method:'delete'
                }
            )
            if(response.ok){
                // reload data
                const data = await response.json()
                const datas = data[0].notifications_account
                const orders = data[0].notifications_orders
                const classsess = data[0].notifications_lesson

                setAccountNotify(datas)
                setOrdersNotify(orders)
                setLessonNotify(classsess)
            } 
        } catch(error) {
            console.log('error',error)
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
                console.log('data',data) 
                const datas = data[0].notifications_account
                console.log('datas',datas)
                const orders = data[0].notifications_orders
                console.log('orders',orders)
                const classsess = data[0].notifications_lesson
                console.log('classsess',classsess)
                console.log(data)
                setAccountNotify(datas)
                setOrdersNotify(orders)
                setLessonNotify(classsess)
               
            } 
        } catch(error) {
            console.log('error',error)
        }
    }

    // async function getMember(id){
    //     try {
    //         const response = await fetch(
    //             'http://localhost:3001/members/get/' + id,
    //             {
    //                 method:'get',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         )
    //         if(response.ok){
    //             const data = await response.json()
    //             const datas = data[0].notifications_account
    //             const orders = data[0].notifications_orders
    //             const classsess = data[0].notifications_lesson

    //             // console.log(data)
    //             setAccountNotify(datas)
    //             setOrdersNotify(orders)
    //             setLessonNotify(classsess)
    //             // console.log(response.data[0].notifications_account)
    //         } 
    //     } catch(error) {
    //         console.log('error',error)
    //     }
    // }

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
                                        {/* <ClicktoRemoveButton
                                            onClick={()=>{
                                                deleteNotifications({i})
                                            }}
                                        /> */}

                                        <button 
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteNotifications({i})}}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
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
                                        {/* <ClicktoRemoveButton 
                                            onClick={()=>{
                                                deleteNotifications({i})
                                            }}
                                        /> */}
                                        <button 
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteNotifications({i})}}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
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
                                        {/* <ClicktoRemoveButton 
                                            onClick={()=>{
                                                deleteNotifications({i})
                                            }}
                                        /> */}
                                        <button 
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{deleteNotifications({i})}}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        {/* <SweetAlert success title="Good job!" onConfirm={this.onConfirm} onCancel={this.onCancel}>
                                        刪除成功！
                                        </SweetAlert> */}
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