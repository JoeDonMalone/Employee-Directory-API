import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Wrapper from './components/Wrapper'
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Wrapper/>
            </div>
        </Router>
    )
}

export default App;