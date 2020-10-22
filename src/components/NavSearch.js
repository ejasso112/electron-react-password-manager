import React from 'react'
import { PassVaultContext } from '../contexts/PassVaultContext'

import '../styles/NavSearch.scss'


const NavSearch = (props) => {
    const contextData = React.useContext(PassVaultContext)

    return (
        <div className={`navSearch`}>
            <input className={`navSearch__bar`} type="text" placeholder="Search" onChange={e => contextData.setSearch(e.target.value)} />
        </div>
    )
}

export default NavSearch

