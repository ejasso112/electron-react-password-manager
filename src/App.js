import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ViewNav from './views/ViewNav'
import ViewPasswords from './views/ViewPasswords'
import ManagePassword from './components/ManagePassword'
import ViewPasswordGenerator from './views/ViewPasswordGenerator'
import ViewPrivacy from './views/ViewPrivacy';
import ViewAbout from './views/ViewAbout';

import PassVaultContextProvider from './contexts/PassVaultContext'
import './styles/_App.scss'

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <PassVaultContextProvider>
                    <Route path='/' component={ViewNav} />
                <Switch>
                    <Route path='/password-generator' exact component={ViewPasswordGenerator} />
                    <Route path='/privacy' exact component={ViewPrivacy} />
                    <Route path='/about' exact component={ViewAbout} />
                    <Route path={'/'} component={ViewPasswords} />
                </Switch>
                
                <Route path='/password/:id' exact component={ManagePassword} />
                </PassVaultContextProvider>
            </Router>
        </React.Fragment>

    )
}

export default App;
