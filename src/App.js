
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

        <Routes>
          <Route exact path="/CoinTracking" element={<Main />} />
          <Route path="/CoinTracking/main" element={<Main />} />
          <Route path="/CoinTracking/login" element={<Login />} />
        </Routes>
 
      </HashRouter>
    </div>
  )
}

export default App;



