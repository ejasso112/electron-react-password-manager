import React from 'react'
import { Link } from 'react-router-dom'
import ImportSvg from '../res/ImportSvg'

import '../styles/PasswordCardList.scss'

const PasswordCardList = (props) => {
    const id = props.data.id
    const imgUrl = props.data.urlSvg && props.data.urlSvg
    const SVG = !imgUrl && ImportSvg.Lock
    const website = props.data.website
    const email = props.data.email
    const name = props.data.name
    const isActive = props.active

    return (
        <Link to={`/password/${id}`} className={`passwordCardList passwordCardList--${isActive}`}>
            <div className={`passwordCardList__imgWrapper`}>
            {imgUrl ?
                <img className={`passwordCardList__img`} src={imgUrl} alt={name} />:
                <SVG className={`passwordCardList__svg`} />}
            </div>
            <div className={`passwordCardList__content`}>
                <h3 className={`passwordCardList__website`}>{website}</h3>
                <p className={`passwordCardList__email`}>{email}</p>
            </div>
        </Link>
    )
}

export default PasswordCardList