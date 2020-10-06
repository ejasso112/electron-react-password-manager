import React from 'react'
import CardPasswordGrid from '../../Cards/CardPasswordGrid/CardPasswordGrid'
import './BlockPasswordsGrid.scss'

const BlockPasswordsGrid = (props) => {
    const activeId = props.activeId

    const passwordsMap = props.data.map(entry =>
        // eslint-disable-next-line
        <CardPasswordGrid key={entry.id} data={entry} active={activeId == entry.id}/>
    )

    return (
        <article className={`blockPasswordsGrid`}>
            {passwordsMap}
        </article>
    )
}

export default BlockPasswordsGrid