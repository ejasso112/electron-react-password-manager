import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import './App.scss'

const App = () => {
    return (
        <main>
            <Router>
                <Route path='/' component={Nav} />
            </Router>
        </main>

    )
}

export default App;
