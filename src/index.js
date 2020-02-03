import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbzcGkbOuWa_cMKCdtWWRsICMV-Zh6B2A",
    authDomain: "marabe-2b660.firebaseapp.com",
    databaseURL: "https://marabe-2b660.firebaseio.com",
    projectId: "marabe-2b660",
    storageBucket: "marabe-2b660.appspot.com",
    messagingSenderId: "154115401178",
    appId: "1:154115401178:web:307b5dfa491a8105c14ce3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
