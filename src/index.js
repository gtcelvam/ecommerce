import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './css/index.css'

function Index() {
    return(
        <App/>
    );
}

var root = document.getElementById('root');
ReactDOM.render(<Index/>,root);