import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const target = document.querySelector("#app");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  target ? target : console.log(target) 
);

