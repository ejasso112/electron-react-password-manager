import React from 'react'
import { Route } from 'react-router-dom'

import ViewPasswords from './ViewPasswords/ViewPasswords'

import './Views.scss'

const Views = (props) => {
    return (
        <section className={`views`}>
            <Route path='/' exact component={ViewPasswords} />
        </section>
    )
}

export default Views