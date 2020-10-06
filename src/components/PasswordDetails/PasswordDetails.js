import React from 'react'
import { Link } from 'react-router-dom'
import CardPaswordDetailsHeader from '../Cards/CardPasswordDetailsHeader/CardPasswordDetailsHeader'
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
            <CardPaswordDetailsHeader params={{svg: filterdData[0].svg, name: filterdData[0].name, color: filterdData[0].color}} />
            <p>Email: {filterdData[0].email}</p>
            <p>Login: {filterdData[0].username}</p>
            <p>Password: {filterdData[0].password}</p>
            <p>Website: {filterdData[0].website}</p>
            <p>Name: {filterdData[0].name}</p>
            <p>Category: {filterdData[0].category}</p>
            <p>Note: {filterdData[0].note}</p>
        </article>
    )
}

export default PasswordDetails