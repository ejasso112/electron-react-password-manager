import React from 'react'

import NavLink from '../components/NavLink'
import NavSearch from '../components/NavSearch'

import GetSvg from '../res/ImportSvg'
import '../styles/ViewNav.scss'

const ViewNav = (props) => {
    const path = props.history.location.pathname

    return(
        <nav className={`viewNav`}>
            <div className={`viewNav__backgroundImg`} />
            <div className={`viewNav__main`}>
                <div className={`viewNav__group`}>
                    <NavSearch />
                    <NavLink to='/' svg={GetSvg.Lock} name='Passwords' isActive={path === '/' || path.includes('/password/')} />
                    <NavLink to='/password-generator' svg={GetSvg.LockAdd} name='Password Generator' isActive={path === '/password-generator'} />
                </div>
            </div>
            <div className={`viewNav__footer`}>
                <NavLink to='/about' name='About' isActive={path === '/about'} />
                <NavLink to='/privacy' name='Privacy' isActive={path === '/privacy'} />
            </div>
        </nav>
    )
}

export default ViewNav