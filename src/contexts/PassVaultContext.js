import React, { Component, createContext } from 'react'
import ImportCompany from '../res/ImportCompany'

export const PassVaultContext = createContext()

class PassVaultContextProvider extends Component {
    state = {
        passwords: [
        ],
        view: 'grid'
    }

    setImport = (data) => {
        this.setState({passwords: data})
    }

    setView = (value) => {
        this.setState({view: value})
    }

    setNewPassword = (password, id) => {
        const isNew = id ? false : true
        const passwordsArray = [...this.state.passwords]
        const newId = !isNew ? id : this.state.passwords[this.state.passwords.length - 1] ? `${parseInt(this.state.passwords[this.state.passwords.length -1].id) + 1}` : '1'
        const newPassword = {id: newId, ...password, urlSvg: ImportCompany[password.website] && ImportCompany[password.website].svg, color: ImportCompany[password.website] && ImportCompany[password.website].color}

        for(let i in passwordsArray) {
            if(passwordsArray[i].id === id) {
                passwordsArray[i] = newPassword
            }
        }

        const updatedPasswords = !isNew ? passwordsArray : [...passwordsArray, newPassword]
        this.setState({passwords: updatedPasswords})
    }

    getPasswordInfo = (passwordId) => {
        const passwords = [...this.state.passwords]
        const filteredPassword = passwords.filter(pass => `${pass.id}` === `${passwordId}`)[0]
        
        return filteredPassword
    }

    render() {
        console.log()
        return (
            <PassVaultContext.Provider 
                value={{
                    ...this.state,
                    setView: this.setView,
                    setNewPassword: this.setNewPassword,
                    setImport: this.setImport,
                    getPasswordInfo: this.getPasswordInfo
                }
            }>
                {this.props.children}
            </PassVaultContext.Provider>
        )
    }
}

export default PassVaultContextProvider