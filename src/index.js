import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from './data/state';
import {addMeseng} from './data/state';
import {postChange} from './data/state';
import {subscribe} from './data/state';

export let render3 = (state) => {
    ReactDOM.render(
        <React.StrictMode>
        <App state={state} addPost={addPost} addMeseng={addMeseng} postChange={postChange}/>
        </React.StrictMode>,
        document.getElementById('root') 
    )
}

render3(state)
subscribe(render3)
reportWebVitals();