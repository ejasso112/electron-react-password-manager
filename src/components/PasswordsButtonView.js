import React from 'react'

import { PassVaultContext } from '../contexts/PassVaultContext'
import '../styles/PasswordsButtonView.scss'

const PasswordsButtonView = (props) => {
    const contextData = React.useContext(PassVaultContext)
    const isActive = contextData.view === props.view
    const Svg = props.svg && props.svg


    return (
        <div className={`passwordsButtonView ${isActive ? 'passwordsButtonView--active' : ''}`} onClick={(e) => contextData.setView(props.view)}>
            <div className={`passwordsButtonView__svgWrapper`}>
                <Svg className={`passwordsButtonView__svg`}/>
            </div>
        </div>
    )
}

export default PasswordsButtonView