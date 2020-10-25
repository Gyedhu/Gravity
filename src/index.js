import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import firebase from "firebase/app";
import dotenv from "dotenv";

// Firebase configuration
dotenv.config();
// const apikey = process.env.REACT_APP_FIREBASE_API_KEY;
const apikey = '{"apiKey": "AIzaSyDYT5b44VvNtikssCWc_k8q7gWbt8xstQA", "authDomain": "gravity-0202.firebaseapp.com", "databaseURL": "https://gravity-0202.firebaseio.com",  "projectId": "gravity-0202", "storageBucket": "gravity-0202.appspot.com", "messagingSenderId": "552320998515", "appId": "1:552320998515:web:9da9d793615404c1bdde06", "measurementId": "G-PDQ01NMLBG" }'
const firebaseConfig = JSON.parse(apikey);
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
