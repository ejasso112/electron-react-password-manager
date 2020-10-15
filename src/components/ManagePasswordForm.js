import React from 'react'
import { useForm } from "react-hook-form"
import { PassVaultContext } from '../contexts/PassVaultContext'
import '../styles/ManagePasswordForm.scss'

const ManagePasswordForm = (props) => {
    const contextData = React.useContext(PassVaultContext)

    const { handleSubmit, register } = useForm()
    const onSubmit = values => contextData.setNewPassword(values)

    return (
        <form className={`managePasswordForm`} onSubmit={handleSubmit(onSubmit)}>
            <div className={`managePasswordForm__group`}>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Email: </label>
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add a email...' name='email' />
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Login: </label>
                    <input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add login...' name='login' />
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Password: </label>
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="password" placeholder='Add password...' name='password' />
                </div>
            </div>
            <div className={`managePasswordForm__group`}>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Website: </label>
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add website...' name='website' />
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Name: </label>
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add name...' name='name' />
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Category: </label>
                    <input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add category...' name='category' />
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Note: </label>
                    <input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add a note...' name='note' />
                </div>
            </div>
            <div>
                <input type='submit' />
            </div>
        </form>
    )
}

export default ManagePasswordForm