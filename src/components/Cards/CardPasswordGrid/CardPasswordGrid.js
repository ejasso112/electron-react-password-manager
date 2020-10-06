import React from 'react'
import { Link } from 'react-router-dom'
import './CardPasswordGrid.scss'

const CardPasswordGrid = (props) => {
    const isActive = props.active
    const imgUrl = props.data.svg
    const website = props.data.website
    const email = props.data.email
    const name = props.data.name

    return (
        <Link to={`/password/${props.data.id}`} className={`cardPasswordGrid cardPasswordGrid--${isActive}`}>
            <div className={`cardPasswordGrid__imgWrapper`}>
                <img className={`cardPasswordGrid__img`} src={imgUrl} alt={name} />
            </div>
            <h3 className={`cardPasswordGrid__website`}>{website}</h3>
            <p className={`cardPasswordGrid__email`}>{email}</p>
        </Link>
    )
}

export default CardPasswordGrid