import React from 'react'

import '../styles/NavSearch.scss'


const NavSearch = (props) => {
    return (
        <div className={`navSearch`}>
            <input className={`navSearch__bar`} type="text" placeholder="Search" />
        </div>
    )
}

export default NavSearch

