import React from 'react'
import {CSVLink} from 'react-csv'

import { PassVaultContext } from '../contexts/PassVaultContext'

const ExportFile = (props) => {
    const contextData = React.useContext(PassVaultContext)

    return (
        <CSVLink data={contextData.passwords}>
            {props.children}
        </CSVLink>
    )
}

export default ExportFile