import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import {BrowserRouter} from "react-router-dom";

// import './index.css'

ReactDOM.render(
    (
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
    ),
    document.getElementById('root')
);

