import React from 'react'
import './MemberHeader.scss'

function MemberHeader() {
    return (
        <>
        <nav class="w-memberNav">
        <div className="w-navcontainer">
            <div className="d-flex">
                <img className="w-navlogo" src="images/member/Logo_o-04.png" alt="" />
            </div>
        </div>
    </nav>
        </>
    )
}

export default MemberHeader