
import { useEffect, useState } from 'react';
import Coin from './components/Coin';
import axios from 'axios';
import Iframe from 'react-iframe';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './components/Main';
import { Login } from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;



