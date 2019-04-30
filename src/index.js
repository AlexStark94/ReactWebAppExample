import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Styles
import './global.css';

// Components
import App from './components/App';

const container = document.getElementById('app');

// ReactDOM.render(que , donde);
ReactDOM.render(
    <App />, 
    container
);
