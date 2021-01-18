import React, {useState} from 'react'
import './MyCollectionContent.scss'
import MyCollectionTable from '../MyCollectionTable/MyCollectionTable'
import MyCollectionNone from '../MyCollectionNone/MyCollectionNone'

function MyCollectionContent() {
    const [data, setData] = useState(false)

    const display = <MyCollectionTable />
    const none = <MyCollectionNone />

    return (
        <>
        <div>
                <div className="w-div-title pl-4">
                    <p>我的收藏</p>
                </div>
                <div className="w-collect-main px-2">
                    {/* 有收藏則顯示table，無收藏則顯示none */}
                    {data ? none : display}
                    {/* <MyCollectionTable /> */}
                    {/* <MyCollectionNone /> */}
                </div>
            </div>  
        </>
    )
}

export default MyCollectionContent