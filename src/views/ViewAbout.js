import React from 'react'
import '../styles/ViewPrivacy.scss'

const ViewAbout = (props) => {
    return (
        <article className={`viewPrivacy view`}>
            <h3 className={`viewPrivacy__head`}>
                PassVault is a free open source web password manager.
            </h3>
            <p className={`viewPrivacy__paragraph`}>
                This password manager is unlike any other, it does not require a Master Password since everything is kept inside the users computer.
                Passwords are not sent across the web like in other password managers.
            </p>
            <p className={`viewPrivacy__paragraph`}>
                PassVault uses an import/export system that stores your passwords in your local machine keeping them safe from being accessed from anyone but yourself.
            </p>

            <p className={`viewPrivacy__paragraph`}>
                That's why, with PassVault, <span className={`viewPrivacy__paragraph__span`}>you can ensure nobody is going to get access to your data.</span>
            </p>
        </article>
    )
}

export default ViewAbout