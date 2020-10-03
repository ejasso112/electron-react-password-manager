import React from 'react'
import Svgs from '../../data/svg'
import CardNavLink from '../Cards/CardNavLink/CardNavLink'
import './Nav.scss'

const Nav = (props) => {
    const path = props.history.location.pathname
    return(
        <nav className={`nav`}>
            <div className={`nav__container`} />
                <div className={`nav__main`}>
                    <div className={`nav__group`}>
                        <div className={`nav__search`}>
                            <input className={`nav__search__bar`} type="text" placeholder="Search" />
                        </div>
                        <CardNavLink to='/' svg={Svgs.Lock} name='Passwords' isActive={path === '/'} />
                        <CardNavLink to='/password-generator' svg={Svgs.LockAdd} name='Password Generator' isActive={path === '/password-generator'} />
                    </div>
                    <div className={`nav__group`}>
                        <CardNavLink to='/import' svg={Svgs.Import} name='Import' isActive={path === '/import'} />
                        <CardNavLink to='/export' svg={Svgs.Export} name='Export' isActive={path === '/export'} />
                        <CardNavLink to='/settings' svg={Svgs.Settings} name='Settings' isActive={path === '/settings'} />
                    </div>
                </div>
                <div className={`nav__foot`}>
                    <CardNavLink to='/about' name='About' isActive={path === '/about'} />
                    <CardNavLink to='/privacy' name='Privacy' isActive={path === '/privacy'} />
                </div>
        </nav>
    )
}

export default Nav