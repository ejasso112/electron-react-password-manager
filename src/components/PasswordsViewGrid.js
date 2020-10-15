import React from 'react'

import PasswordCardGrid from './PasswordCardGrid'

import '../styles/PasswordsViewGrid.scss'

const PasswordsViewGrid = (props) => {
    const activeId = props.activeId
    const passwordsMap = props.data.map(entry => {
        return (
            // eslint-disable-next-line
            <PasswordCardGrid key={entry.id} data={entry} active={activeId == entry.id}/>
        )
    })

    return (
        <article className={`passwordsViewGrid`}>
            {passwordsMap}
        </article>
    )
}

export default PasswordsViewGrid