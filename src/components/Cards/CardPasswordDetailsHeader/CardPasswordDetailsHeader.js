import React from 'react'

import './CardPasswordDetailsHeader.scss'

const CardPasswordDetailsHeader = (props) => {
    return (
        <div style={{background: props.params.color}} className={`cardPasswordDetailsHeader`}>
            <div className={`cardPasswordDetailsHeader__imgWrapper`}>
                <img className={`cardPasswordDetailsHeader__img`} src={props.params.svg} alt={props.params.name} />
            </div>
            <h3 className={`cardPasswordDetailsHeader__name`}>{props.params.name}</h3>
        </div>
    )
}

export default CardPasswordDetailsHeader