import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ViewNav from './views/ViewNav'
import ViewPasswords from './views/ViewPasswords'
import ManagePassword from './components/ManagePassword'

import PassVaultContextProvider from './contexts/PassVaultContext';
import './styles/_App.scss'

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <PassVaultContextProvider>
                    <Route path='/' component={ViewNav} />
                    <Route path={['/', '/password/:id']} exact component={ViewPasswords} />
                    <Route path='/password/:id' exact component={ManagePassword} />
                </PassVaultContextProvider>
            </Router>
        </React.Fragment>

    )
}

export default App;
