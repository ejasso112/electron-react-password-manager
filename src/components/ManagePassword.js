import React from 'react'
import { Link } from 'react-router-dom'

import ManagePasswordHeader from './ManagePasswordHeader'
import ManagePasswordForm from './ManagePasswordForm'

import ImportSvg from '../res/ImportSvg'
import { PassVaultContext } from '../contexts/PassVaultContext'

import '../styles/ManagePassword.scss'

const ManagePassword = (props) => {
    const contextData = React.useContext(PassVaultContext)
    const passwordId = !isNaN(props.match.params.id) && props.match.params.id
    const passwordInfo = passwordId ? contextData.getPasswordInfo(passwordId) : {color: '#3B8ABE', svg: ImportSvg.Lock, name: 'Add a password'}

    return (
        <article className={`passwordDetails`}>
            <Link to='/' className={`passwordDetails__exit`}>
                <div className={`passwordDetails__exit__content`}></div>
            </Link>
            <ManagePasswordHeader color={passwordInfo.color} svg={passwordInfo.svg} urlSvg={passwordInfo.urlSvg} name={passwordInfo.name} />
            <ManagePasswordForm passwordInfo={passwordInfo} key={passwordId}/>
        </article>
    )
}

export default ManagePassword