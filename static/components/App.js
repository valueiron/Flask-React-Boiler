import React from 'react';
import './App.css';

const App = () => {

    return(
        <div>
            <p>{fetch("http://localhost:5000/api").then(response => response.text()).then(data => console.log(data))}</p>
        </div>
    )
}

export default App;
