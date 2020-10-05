import React from 'react'
import CardButton from '../../components/Cards/CardButton/CardButton'
import BlockPasswordsGrid from '../../components/Blocks/BlockPasswordsGrid/BlockPasswordsGrid'
import Svgs from '../../data/svg'
import data from '../../data/passwords.json'

import './Passwords.scss'

const Passwords = (props) => {
    return (
        <div className={`passwords`}>
            <div className={`passwords__menu`}>
                <div className={`passwords__menu__group`}>
                    <CardButton primary svg={Svgs.Add} name='Add New' />
                    <CardButton svg={Svgs.Import} name='Import' />
                    <CardButton svg={Svgs.Export} name='Export' />
                </div>
            </div>
            <BlockPasswordsGrid data={data} />
        </div>
    )
}

export default Passwords