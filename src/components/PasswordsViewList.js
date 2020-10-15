import React from 'react'

import PasswordCardList from './PasswordCardList'

import '../styles/PasswordsViewList.scss'

const PasswordsViewList = (props) => {
    const activeId = props.activeId
    const passwordsMap = props.data.map(entry => {
        return (
            // eslint-disable-next-line
            <PasswordCardList key={entry.id} data={entry} active={activeId == entry.id}/>
        )
    })

    return (
        <article className={`passwordsViewList`}>
            {passwordsMap}
        </article>
    )
}

export default PasswordsViewList