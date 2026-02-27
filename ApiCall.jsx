import { useState } from 'react';
import axios from 'axios';

import './App.css'

function App() {
    async function callApi() {
        const response = await axios.get("http://127.0.0.1:5000/test/json")
        console.log("fetching data...", response.data);
    }
    async function postApi() {
        const response = await axios.post("http://127.0.0.1:5001/api/signup",
            {
                "username": "adwaith", "password": "123456"
            }
        )
        console.log("fetching data...", response.data);

    }
    
    return (
        <>
            <h1>hello</h1>
            <button onClick={callApi}>fetch data</button>
            <button onClick={postApi}>post data</button>
        </>
    );
}

export default App
