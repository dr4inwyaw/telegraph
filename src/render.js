import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './data/state';
import {addMeseng} from './data/state';

export let render3 = (state) => {
    ReactDOM.render(
        <React.StrictMode>
        <App state={state} addPost={addPost} addMeseng={addMeseng}/>
        </React.StrictMode>,
        document.getElementById('root') 
    )
}

reportWebVitals();

