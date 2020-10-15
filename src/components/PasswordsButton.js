import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PasswordsButton.scss'

const PasswordsButton = (props) => {
    const isPrimary = props.primary
    const to = props.to
    const name = props.name && props.name
    const Svg = props.svg && props.svg
    
    const buttonSvg = Svg && <div className={`passwordsButton__svgWrapper`}>
        <Svg className={`passwordsButton__svg ${isPrimary && 'passwordsButton__svg--active'}`}/>
    </div>

    const buttonName = name && <h2 className={`passwordsButton__name ${isPrimary && 'passwordsButton__name--active'}`}>{name}</h2>

   return (
        to ?
        <Link className={`passwordsButton ${isPrimary ? 'passwordsButton--active': ''}`} to={to}>
            {buttonSvg}
            {buttonName}
        </Link> :
        <div className={`passwordsButton ${isPrimary ? 'passwordsButton--active': ''}`}>
            {buttonSvg}
            {buttonName}
        </div>
    )
}

export default PasswordsButton