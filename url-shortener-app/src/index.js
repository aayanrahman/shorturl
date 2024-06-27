import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'; 


const firebaseConfig = {
  apiKey: "AIzaSyCBsfnasmEsXxlpn5ppLQGs1_z3HM_kZ3U",
  authDomain: "url-shortener-6530b.firebaseapp.com",
  projectId: "url-shortener-6530b",
  storageBucket: "url-shortener-6530b.appspot.com",
  messagingSenderId: "547317282212",
  appId: "1:547317282212:web:a1fe149af06272a3ed3d31",
  measurementId: "G-CJSP3K5311"
};

initializeApp(firebaseConfig);

/*
// Depreciated might have to fix later with future releases 
ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
)
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
