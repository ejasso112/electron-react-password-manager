import React from 'react'
import CardButton from '../../components/Cards/CardButton/CardButton'
import BlockPasswordsGrid from '../../components/Blocks/BlockPasswordsGrid/BlockPasswordsGrid'
import Svgs from '../../data/svg'
import data from '../../data/passwords.json'

import './ViewPasswords.scss'

const ViewPasswords = (props) => {
    return (
        <article className={`viewPasswords`}>
            <div className={`viewPasswords__menu`}>
                <div className={`viewPasswords__menu__group`}>
                    <CardButton primary svg={Svgs.Add} name='Add New' />
                    <CardButton svg={Svgs.Import} name='Import' />
                    <CardButton svg={Svgs.Export} name='Export' />
                </div>
            </div>
            <BlockPasswordsGrid data={data} activeId={props.match.params.id}/>
        </article>
    )
}

export default ViewPasswords