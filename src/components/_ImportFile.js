import React from 'react'
import Papa from 'papaparse'

import { PassVaultContext } from '../contexts/PassVaultContext'

const ImportFile = (props) => {
    const contextData = React.useContext(PassVaultContext)

    const handleFiles = event => {
        Papa.parse(event.target.files[0], {
            complete: updateData,
            header: true
        })
    }

    const updateData = (result) => {
        var data = result.data
        contextData.setImport(data)
        //console.log(data)
    }

    return (
        <React.Fragment>
            <label htmlFor="filePicker">{props.children}</label>
            <input  id="filePicker"  type='file' onChange={handleFiles} style={{display:"none"}} />
        </React.Fragment>
    )
}

export default ImportFile