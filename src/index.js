import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import avatar1 from './img/7300000.jpg'


// let dialogName = [{name:"Илон Маск", id: "0" },
//                  {name:"Иванов Иван", id: "1" },
//                  {name: "Максимов Максим", id: "2" }]

let dialogName = [{name:"Илон Маск", id: "0" },
                  {name:"Иванов Иван", id: "1" },
                  {name: "Максимов Максим", id: "2" }]

let dialogMes = [{text:"как дела?"},
                 {text:"чем занимаешься?"},
                 {text:"как настроение?"}]

let postsName = [{ name:"Илон Маск", text:"X-twitter",  img: avatar1, like:'1'},
                 { name:"Иванов Иван", text:"Оцените мою новость",  img: avatar1, like:'2' },
                 { name:"Максимов Максим", text:"купил новую машину", img: avatar1, like:'3'},]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App data={postsName} data2={dialogName} data3={dialogMes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
