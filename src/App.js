
import { useEffect, useState } from 'react';
import Coin from './components/Coin';
import axios from 'axios';
import Iframe from 'react-iframe';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Main from './components/Main';
import { Login } from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      </HashRouter>
    </div>
  )
}

export default App;



