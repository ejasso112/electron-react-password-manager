import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Views from './Views/Views'
import './App.scss'

const App = () => {
    return (
        <main className={`main`}>
            <Router>
                <Route path='/' component={Nav} />
                <Route path='/' component={Views} />
            </Router>
        </main>

    )
}

export default App;
