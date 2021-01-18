import React, {useState} from 'react'
import './MyCollectionNone.scss'
import { NavLink } from 'react-router-dom'

function MyCollectionNone() {
    return (
        <>
        <div className="w-collect-none">
            <p>目前還沒有收藏商品，快去選購吧</p>
            <div className="d-flex">
                <NavLink to="/member" className="w-btn-viewlesson">植物租賃</NavLink>                
                <NavLink to="/member" className="w-btn-viewlesson">植物選購</NavLink>  
            </div>   
        </div>
        </>
    )
}

export default MyCollectionNone