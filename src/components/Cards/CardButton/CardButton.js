import React from 'react'
import { Link } from 'react-router-dom'
import './CardButton.scss'

const CardButton = (props) => {
    const isPrimary = props.primary
    const to = props.to
    const name = props.name && props.name
    const Svg = props.svg && props.svg
    console.log(props)
    return (
        <Link className={`cardButton ${isPrimary && 'cardButton--active'}`} to={to}>
            {Svg && <div className={`cardButton__svgWrapper`}>
                <Svg className={`cardButton__svg ${!isPrimary && 'cardButton__svg--inactive'}`}/>
            </div>}
            {name && <h2 className={`cardButton__name ${!isPrimary && 'cardButton__name--inactive'}`}>{name}</h2>}
        </Link>
    )
}

export default CardButton