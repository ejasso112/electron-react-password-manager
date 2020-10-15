import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/NavLink.scss'

const NavLink = (props) => {
    const isActive = props.isActive
    const to = props.to && props.to
    const name = props.name && props.name
    const Svg = props.svg && props.svg

    return (
        <Link className={`navLink ${isActive && 'navLink--active'}`} to={to}>
            {Svg && <div className={`navLink__svgWrapper`}>
                <Svg className={`navLink__svg`}/>
            </div>}
            {name && <h2 className={`navLink__name`}>{name}</h2>}
        </Link>
    )
}

export default NavLink