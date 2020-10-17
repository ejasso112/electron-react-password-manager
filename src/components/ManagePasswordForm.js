import React from 'react'
import copy from 'copy-to-clipboard'
import { useForm } from "react-hook-form"
import { PassVaultContext } from '../contexts/PassVaultContext'
import '../styles/ManagePasswordForm.scss'

const ManagePasswordForm = (props) => {
    const [isEditable,setEditable] = React.useState(false)
    const isAdd = !props.passwordInfo.id

    const displayEmail = props.passwordInfo.id ? props.passwordInfo.email : undefined
    const displayLogin = props.passwordInfo.id ? props.passwordInfo.login : undefined
    const displayPassword = props.passwordInfo.id ? props.passwordInfo.password : undefined
    const displayWebsite = props.passwordInfo.id ? props.passwordInfo.website : undefined
    const displayName = props.passwordInfo.id ? props.passwordInfo.name : undefined
    const displayCategory = props.passwordInfo.id ? props.passwordInfo.category : undefined
    const displayNote = props.passwordInfo.id ? props.passwordInfo.note : undefined

    const contextData = React.useContext(PassVaultContext)

    const { handleSubmit, register } = useForm()
    const onSubmit = values => {
        contextData.setNewPassword(values, props.passwordInfo.id)
        setEditable(false)
    }

    const handleCopy = (type) => {
        const text = type === 'email' ? displayEmail :
        type === 'login' ? displayLogin :
        type === 'password' ? displayPassword :
        type === 'website' ? displayWebsite :
        type === 'name' ? displayName :
        type === 'category' ? displayCategory :
        type === 'note' && displayNote
        
        if (typeof text === "string" || typeof text == "number") {
          copy(text.toString())
        } 
      }

    return (
        <form className={`managePasswordForm`} onSubmit={handleSubmit(onSubmit)}>
            <div className={`managePasswordForm__group`}>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Email: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add a email...' value={displayEmail} name='email' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('email')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add a email...' defaultValue={displayEmail} name='email' />
                    }
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Login: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add login...' value={displayLogin} name='login' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('login')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add login...' defaultValue={displayLogin} name='login' />
                    }
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Password: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register({required: true})} type="password" placeholder='Add password...' value={displayPassword} name='password' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('password')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="password" placeholder='Add password...' defaultValue={displayPassword} name='password' />
                    }
                </div>
            </div>
            <div className={`managePasswordForm__group`}>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Website: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add website...' value={displayWebsite} name='website' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('website')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add website...' defaultValue={displayWebsite} name='website' />
                    }
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Name: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add name...' value={displayName} name='name' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('name')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register({required: true})} type="text" placeholder='Add name...' defaultValue={displayName} name='name' />
                    }
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Category: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add category...' value={displayCategory} name='category' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('category')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add category...' defaultValue={displayCategory} name='category' />
                    }
                </div>
                <div className={`managePasswordForm__item`}>
                    <label className={`managePasswordForm__label`}>Note: </label>
                    {!isEditable ?
                    <><input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add a note...' value={displayNote} name='note' />
                    {!isAdd && <button type='button' onClick={e => handleCopy('note')}>Copy</button>}</> :
                    <input className={`managePasswordForm__textField`} ref={register} type="text" placeholder='Add a note...' defaultValue={displayNote} name='note' />
                    }
                </div>
            </div>
            <div>
                {isAdd && <input type='submit' />}
                {!isAdd && !isEditable && <button type='button' onClick={e => setEditable(true)}>Edit</button>}
                {!isAdd && isEditable && <>
                <input type='submit' value='Save' />
                <button type='button' onClick={e => setEditable(false)}>Cancel</button>
                </>}
            </div>
        </form>
    )
}

export default ManagePasswordForm