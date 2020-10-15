import React, { Component, createContext } from 'react'
import ImportCompany from '../res/ImportCompany'

export const PassVaultContext = createContext()

class PassVaultContextProvider extends Component {
    state = {
        passwords: [
            {id: 1, email:"amazon@gmail.com", login: "login", password: "dsdasvsdva", website: "amazon.com", name: "amazon.com", category: "Bussiness", note: "", urlSvg: ImportCompany['amazon.com'].svg, color: ImportCompany['amazon.com'].color},
            {id: 2, email: "youtube@gmail.com", login: "login", password: "dsdasvsdva", website: "youtube.com", name: "youtube.com", category: "Entertainment", note: "", urlSvg: ImportCompany['youtube.com'].svg, color: ImportCompany['youtube.com'].color},
            {id: 3, email: "apple@gmail.com", login: "login", password: "dsdasvsdva", website: "apple.com", name: "apple.com", category: "Financial", note: "", urlSvg: ImportCompany['apple.com'].svg, color: ImportCompany['apple.com'].color}
        ],
        view: 'grid'
    }

    setImport = (data) => {
        this.setState({passwords: data})
    }

    setView = (value) => {
        this.setState({view: value})
    }

    setNewPassword = (password) => {
        const newId = this.state.passwords[this.state.passwords.length -1].id + 1

        const newPassword = {id: newId, ...password, urlSvg: ImportCompany[password.website].svg, color: ImportCompany[password.website].color}
        console.log(newPassword)

        this.setState({passwords: [...this.state.passwords, newPassword]})
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