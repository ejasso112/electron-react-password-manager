import React from 'react'

import '../styles/ManagePasswordHeader.scss'

const AddPasswordHeader = (props) => {
    const SVG = props.svg && props.svg
    const urlSvg = props.urlSvg && props.urlSvg

    return (
        <div style={{background: props.color}} className={`managePasswordHeader`}>
            <div className={`managePasswordHeader__wrapper`}>
                {SVG && <SVG className={`managePasswordHeader__svg`}/>}
                {urlSvg && <img className={`managePasswordHeader__img`} src={urlSvg} alt={props.name}/>}
            </div>
            <h1 className={`managePasswordHeader__name`}>{props.name}</h1>
        </div>
    )
}

export default AddPasswordHeader