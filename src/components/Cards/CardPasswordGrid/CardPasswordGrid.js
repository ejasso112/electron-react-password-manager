import React from 'react'
import './CardPasswordGrid.scss'

const CardPasswordGrid = (props) => {
    const imgUrl = props.data.svg
    const website = props.data.website
    const email = props.data.email
    const name = props.data.name

    return (
        <div className={`cardPasswordGrid`}>
            <div className={`cardPasswordGrid__imgWrapper`}>
                <img className={`cardPasswordGrid__img`} src={imgUrl} alt={name} />
            </div>
            <h3 className={`cardPasswordGrid__website`}>{website}</h3>
            <p className={`cardPasswordGrid__email`}>{email}</p>
        </div>
    )
}

export default CardPasswordGrid