import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Passwords from './pages/Passwords/Passwords';
import './App.scss'

const App = () => {
    return (
        <main className={`main`}>
            <Router>
                <Route path='/' component={Nav} />
                <Route path='/' exact component={Passwords} />
            </Router>
        </main>

    )
}

export default App;
