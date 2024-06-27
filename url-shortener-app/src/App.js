import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form'; 
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Form />} />
              <Route exact path="/app" element={<Form />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

