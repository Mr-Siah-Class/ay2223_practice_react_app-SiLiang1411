import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
                <NavBar/>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

export default App;
