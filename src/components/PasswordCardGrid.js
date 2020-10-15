import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/PasswordCardGrid.scss'

const PasswordCardGrid = (props) => {
    const id = props.data.id
    const imgUrl = props.data.urlSvg
    const website = props.data.website
    const email = props.data.email
    const name = props.data.name
    const isActive = props.active

    return (
        <Link to={`/password/${id}`} className={`passwordCardGrid passwordCardGrid--${isActive}`}>
            <div className={`passwordCardGrid__imgWrapper`}>
                <img className={`passwordCardGrid__img`} src={imgUrl} alt={name} />
            </div>
            <h3 className={`passwordCardGrid__website`}>{website}</h3>
            <p className={`passwordCardGrid__email`}>{email}</p>
        </Link>
    )
}

export default PasswordCardGrid