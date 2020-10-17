import React from 'react'
import ImportSvg from '../res/ImportSvg'

import '../styles/ManagePasswordHeader.scss'

const ManagePasswordHeader = (props) => {
    const urlSvg = props.urlSvg && props.urlSvg
    const SVG = props.svg && props.svg
    const MissingImgSVG = ImportSvg.Lock
    const background = props.color ? props.color : '#3B8ABE'

    return (
        <div style={{background: background}} className={`managePasswordHeader`}>
            <div className={`managePasswordHeader__wrapper`}>
                {!SVG && !urlSvg && <MissingImgSVG className={`managePasswordHeader__svg`} style={{fill: background}}/>}
                {SVG && <SVG className={`managePasswordHeader__svg`}/>}
                {urlSvg && <img className={`managePasswordHeader__img`} src={urlSvg} alt={props.name}/>}
            </div>
            <h1 className={`managePasswordHeader__name`}>{props.name}</h1>
        </div>
    )
}

export default ManagePasswordHeader