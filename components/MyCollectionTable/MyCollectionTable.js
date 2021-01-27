import React, {useState,useEffect} from 'react'
import './MyCollectionTable.scss'
import ClicktoCartButton from '../ClicktoCartButton/ClicktoCartButton'
import {NavLink,useHistory,withRouter} from 'react-router-dom'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function MyCollectionTable(props) {
    // console.log('hasprops?',props)
    const id = props.match.params.id
    // console.log('id???',id)

    const [collections, setCollections] = useState([])
    
    // sweet alert
    const MySwal = withReactContent(Swal)


    let history = useHistory()


    async function deleteCollections(index){
        // const member_id = 1
        try {
            const response = await fetch(
                'http://localhost:3001/members/deleteCollections/' + index + '/' + id,
                {
                    method:'delete'
                }
            )
            if(response.ok){
                // reload data
                getCollections(id)
                history.push('/member/MyCollections/'+ id)
               
            } 
        } catch(error) {
            console.log('error',error)
        }
    }



    async function getCollections(id){
        try {
            const response = await fetch(
                `http://localhost:3001/members/${id}`,
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
                // data是該會員的所有資料
                // console.log('data?:',data)
                const datas = data.collections
                // datas是該會員的所有收藏資料
                // console.log('datas?:',datas)

                setCollections(datas)
            } 
        } catch {
            alert('no data')
        }
    }


    useEffect(()=>{
        getCollections(id)
    },[])

    const display = (
        <>
            <table className="table" style={{width: 900}}>
                        <thead className="w-mycollect-tablehead" style={{backgroundColor: '#E6E9DA'}}>
                            <tr>
                                <th scope="col" style={{width: 180}}></th>
                                <th scope="col" style={{width: 270}}>商品</th>
                                <th scope="col" style={{width: 150}}>價格</th>
                                <th scope="col" style={{width: 200}}>加入購物車</th>
                                <th scope="col" style={{width: 100}}>移除收藏</th>
                            </tr>
                        </thead>
                        <tbody className="w-mycollect-tablebody">
                            {collections.map((v, i)=>{
            return(
                <tr key={i}>
            <td className="align-middle">
                <img className="w-collect-pics" src={v.product_img} alt="" />                    
            </td>                                        
            <td className="align-middle">
                <div className="w-collect-prod d-inline-block">
                    <span>{v.product_name}</span>
                    <p>{v.product_info}</p>                 
                </div>                    
            </td>                    
            <td className="align-middle" style={{color: '#E58F80'}}>
                <p>NT$ {v.product_price}</p>
            </td>
            <td className="align-middle d-flex justify-content-center">
                <ClicktoCartButton />
            </td>
            <td className="align-middle" style={{textAlign: 'center',maxWidth:100}}>
            <button
                                            type="button" 
                                            className="close w-remove" 
                                            id="w-rrrmove" 
                                            aria-label="Close" 
                                            onClick={()=>{
                                                MySwal.fire({
                                                    title: '是否刪除收藏？',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: '是，我要刪除!',
                                                    cancelButtonText: '返回'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire(
                                                        'Deleted!',
                                                        deleteCollections(v.index),
                                                        'success'
                                                        )
                                                    }
                                                    })
                                            }}
                                            >
                                            <span aria-hidden="true">&times;</span>
                                        </button>                    
            </td>
        </tr>
            )
        })}
                        </tbody>
                    </table>
        </>
    )

    const none = (
        <MyCollectionNone />
        
    )


    return (
        <>
        {collections == 0 ? none : display }
        </>
    )
}

export default withRouter(MyCollectionTable)