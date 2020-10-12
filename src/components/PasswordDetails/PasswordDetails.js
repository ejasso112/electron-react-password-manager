import React from 'react'
import { Link } from 'react-router-dom'
import CardPaswordDetailsHeader from '../Cards/CardPasswordDetailsHeader/CardPasswordDetailsHeader'
import CardPaswordDetailsForm from '../Cards/CardPaswordDetailsForm/CardPaswordDetailsForm'
import data from '../../data/passwords.json'

import './PasswordDetails.scss'

const PasswordDetails = (props) => {
    // eslint-disable-next-line
    const filterdData = data.filter(entry => entry.id == props.match.params.id)
    
    return (
        <article className={`passwordDetails`}>
            <Link to='/' className={`passwordDetails__exit`}>
                <div className={`passwordDetails__exit__content`}></div>
            </Link>
            <CardPaswordDetailsHeader params={filterdData[0]} />
            <CardPaswordDetailsForm params={filterdData[0]}/>
        </article>
    )
}

export default PasswordDetails