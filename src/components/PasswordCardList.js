import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/PasswordCardList.scss'

const PasswordCardList = (props) => {
    const id = props.data.id
    const imgUrl = props.data.urlSvg
    const website = props.data.website
    const email = props.data.email
    const name = props.data.name
    const isActive = props.active

    return (
        <Link to={`/password/${id}`} className={`passwordCardList passwordCardList--${isActive}`}>
            <div className={`passwordCardList__imgWrapper`}>
                <img className={`passwordCardList__img`} src={imgUrl} alt={name} />
            </div>
            <div className={`passwordCardList__content`}>
                <h3 className={`passwordCardList__website`}>{website}</h3>
                <p className={`passwordCardList__email`}>{email}</p>
            </div>
        </Link>
    )
}

export default PasswordCardList