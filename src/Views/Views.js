import React from 'react'
import { Route } from 'react-router-dom'

import ViewPasswords from './ViewPasswords/ViewPasswords'
import PasswordDetails from '../components/PasswordDetails/PasswordDetails'

import './Views.scss'

const Views = (props) => {
    return (
        <section className={`views`}>
            <Route path={['/', '/password/:id']} exact component={ViewPasswords} />
            <Route path='/password/:id' component={PasswordDetails} />
        </section>
    )
}

export default Views