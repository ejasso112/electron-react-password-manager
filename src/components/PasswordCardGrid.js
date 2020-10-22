import React from 'react'
import { Link } from 'react-router-dom'
import ImportSvg from '../res/ImportSvg'

import '../styles/PasswordCardGrid.scss'

const PasswordCardGrid = (props) => {
    const id = props.data.id
    const imgUrl = props.data.urlSvg && props.data.urlSvg
    const SVG = !imgUrl && ImportSvg.Lock
    const email = props.data.email
    const name = props.data.name
    const isActive = props.active

    return (
        <Link to={`/password/${id}`} className={`passwordCardGrid passwordCardGrid--${isActive}`}>
            <div className={`passwordCardGrid__imgWrapper`}>
                {imgUrl ?
                <img className={`passwordCardGrid__img`} src={imgUrl} alt={name} />:
                <SVG className={`passwordCardGrid__svg`} />}
            </div>
            <h3 className={`passwordCardGrid__name`}>{name}</h3>
            <p className={`passwordCardGrid__email`}>{email}</p>
        </Link>
    )
}

export default PasswordCardGrid