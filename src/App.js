import React from 'react';
import './App.css';
import Router from './components/Router';
import firebase from 'firebase';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

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


export default App;
