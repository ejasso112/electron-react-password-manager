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
    let [sortBy, SetSortBy] = React.useState('name')
    const contextData = React.useContext(PassVaultContext)

    const compareByName = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    const compareByCategory = (a, b) => {
        if (a.category + a.name < b.category + b.name) {
            return -1;
        }
        if (a.category + a.name > b.category + b.name) {
            return 1;
        }
        return 0;
    }

    const compareByEmail = (a, b) => {
        if (a.email + a.name < b.email + b.name) {
            return -1;
        }
        if (a.email + a.name > b.email + b.name) {
            return 1;
        }
        return 0;
    }

    console.log(sortBy)
    const passwordsByName = [...contextData.passwords.sort(compareByName)].filter(name => name.name.includes(contextData.search))
    const passwordsByCategory = [...contextData.passwords.sort(compareByCategory)].filter(name => name.name.includes(contextData.search))
    const passwordsByEmail = [...contextData.passwords.sort(compareByEmail)].filter(name => name.name.includes(contextData.search))

    const sortedPasswords = sortBy === 'name' ? passwordsByName :
    sortBy === 'category' ? passwordsByCategory : passwordsByEmail

    return (
        <article className={`viewPasswords view`}>
            <div className={`viewPasswords__menu`}>
                <div className={`viewPasswords__menu__group`}>
                    <PasswordsButton primary to='/password/add' svg={ImportSvg.Add} name='Add New' />
                    <ImportFile><PasswordsButton svg={ImportSvg.Import} name='Import' /></ImportFile>
                    <ExportFile><PasswordsButton svg={ImportSvg.Export} name='Export' /></ExportFile>
                </div>
                <div className={`viewPasswords__menu__group`}>
                    <select style={{height: 42, background: 'transparent', border: 0, outline: 0}} onChange={e => SetSortBy(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                        <option value="email">Email</option>
                    </select>
                    <PasswordsButtonView svg={ImportSvg.GridView} view='grid' />
                    <PasswordsButtonView svg={ImportSvg.DetailsView} view='list' />
                </div>
            </div>
            {contextData.view === 'grid' &&
                <PasswordsViewGrid data={sortedPasswords} activeId={props.match.params.id} />
            }
            {contextData.view === 'list' &&
                <PasswordsViewList data={sortedPasswords} activeId={props.match.params.id} />
            }
        </article>
    )
}

export default ViewPasswords