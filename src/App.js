import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/home/Home';
import Footer from './Component/Footer/Footer'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (

    
    <div className="app">
      <Router>
        <Header />
        <Home />
        <Footer />
      </Router>
        
    </div>
  );
}

export default App;
