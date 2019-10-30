import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from "./store";
import * as serviceWorker from './serviceWorker';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL="http://94.191.84.187:1222"
React.Component.prototype.$http=axios;
ReactDOM.render(   
    <Provider store={store}>
     <App />
   </Provider>
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
