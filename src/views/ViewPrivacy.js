import React from 'react'
import '../styles/ViewPrivacy.scss'

const ViewPrivacy = (props) => {
    return (
        <article className={`viewPrivacy view`}>
            <h3 className={`viewPrivacy__head`}>
                We do not store any data, period.
            </h3>
            <p className={`viewPrivacy__paragraph`}>
                We physically can't. We have nowhere to store it. We don't even have a server database to store it. So even if Justin Bieber asked nicely to see your data, we wouldn't have anything to show him.
            </p>
            <p className={`viewPrivacy__paragraph`}>
                That's why, with PassVault, <span className={`viewPrivacy__paragraph__span`}>what happens on your computer stays on your computer.</span>
            </p>
        </article>
    )
}

export default ViewPrivacy