import React, {useState} from 'react'
import './ClicktoDetailButton.scss'
import { NavLink } from 'react-router-dom'

function ClicktoDetailButton() {
    return (
        <>
        <NavLink to="/rentalorder" className="w-btn-clicktodetail">訂單詳情</NavLink>
        </>
    )
}

export default ClicktoDetailButton