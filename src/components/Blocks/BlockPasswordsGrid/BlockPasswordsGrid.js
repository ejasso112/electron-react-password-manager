import React from 'react'
import CardPasswordGrid from '../../Cards/CardPasswordGrid/CardPasswordGrid'
import './BlockPasswordsGrid.scss'

const BlockPasswordsGrid = (props) => {
    const passwordsMap = props.data.map(entry =>
        <CardPasswordGrid key={entry.id} data={entry} />
    )

    return (
        <article className={`blockPasswordsGrid`}>
            {passwordsMap}
        </article>
    )
}

export default BlockPasswordsGrid