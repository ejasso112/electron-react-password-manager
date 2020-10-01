import React from 'react'
import { Link } from 'react-router-dom'
import './CardNavLink.scss'

const CardNavLink = (props) => {
    const isActive = props.isActive
    const to = props.to && props.to
    const name = props.name && props.name
    const Svg = props.svg && props.svg

    return (
        <Link className={`cardNavLink ${isActive && 'cardNavLink--active'}`} to={to}>
            {Svg && <div className={`cardNavLink__svgWrapper`}>
                <Svg className={`cardNavLink__svg`}/>
            </div>}
            {name && <h2 className={`cardNavLink__name`}>{name}</h2>}
        </Link>
    )
}

export default CardNavLink