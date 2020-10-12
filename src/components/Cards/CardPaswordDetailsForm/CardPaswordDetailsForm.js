import React from 'react'

import './CardPaswordDetailsForm.scss'

const CardPaswordDetailsForm = (props) => {
    console.log(props.params)
    return (
        <form className={`cardPaswordDetailsForm`}>
            <div className={`cardPaswordDetailsForm__group`}>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Email: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="text" placeholder='Add a email...' value={props.params.email}/>
                </div>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Login: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="text" placeholder='Add login...' value={props.params.login}/>
                </div>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Password: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="password" placeholder='Add password...'value={props.params.password}/>
                </div>
            </div>
            <div className={`cardPaswordDetailsForm__group`}>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Website: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="text" placeholder='Add website...' value={props.params.website}/>
                </div>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Name: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="text" placeholder='Add name...' value={props.params.name}/>
                </div>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Category: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="text" placeholder='Add category...' value={props.params.category}/>
                </div>
                <div className={`cardPaswordDetailsForm__item`}>
                    <label className={`cardPaswordDetailsForm__label`}>Note: </label>
                    <input className={`cardPaswordDetailsForm__textField`} type="text" placeholder='Add a note...' value={props.params.note}/>
                </div>
            </div>
        </form>
    )
}

export default CardPaswordDetailsForm