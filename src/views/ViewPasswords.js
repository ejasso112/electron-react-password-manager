import React from 'react'

import PasswordsButton from '../components/PasswordsButton'
import PasswordsButtonView from '../components/PasswordsButtonView'

import PasswordsViewGrid from '../components/PasswordsViewGrid'
import PasswordsViewList from '../components/PasswordsViewList'

import ExportFile from '../components/_ExportFile'
import ImportFile from '../components/_ImportFile'

import { PassVaultContext } from '../contexts/PassVaultContext'
import ImportSvg from '../res/ImportSvg'
import '../styles/ViewPasswords.scss'

const ViewPasswords = (props) => {
    const contextData = React.useContext(PassVaultContext)
    console.log(contextData.passwords)
    
    return (
        <article className={`viewPasswords view`}>
            <div className={`viewPasswords__menu`}>
                <div className={`viewPasswords__menu__group`}>
                    <PasswordsButton primary to='/password/add' svg={ImportSvg.Add} name='Add New' />
                    <ImportFile><PasswordsButton svg={ImportSvg.Import} name='Import' /></ImportFile>
                    <ExportFile><PasswordsButton svg={ImportSvg.Export} name='Export' /></ExportFile>
                </div>
                <div className={`viewPasswords__menu__group`}>
                    <PasswordsButtonView svg={ImportSvg.GridView} view='grid' />
                    <PasswordsButtonView svg={ImportSvg.DetailsView} view='list' />
                </div>
            </div>
            {contextData.view === 'grid' &&
                <PasswordsViewGrid data={contextData.passwords} activeId={props.match.params.id} />
            }
            {contextData.view === 'list' &&
                <PasswordsViewList data={contextData.passwords} activeId={props.match.params.id} />
            }
        </article>
    )
}

export default ViewPasswords