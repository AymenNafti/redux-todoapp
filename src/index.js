import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './FoldeRedux/Store'
import {Provider} from 'react-redux'

ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>
  ,document.getElementById('root')
);
// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
