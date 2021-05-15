import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Home/>
            </div>
        </Router>
    )
}

export default App;