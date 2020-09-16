import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/home/Home';
import Footer from './Component/Footer/Footer'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './Component/SearchPage/SearchPage';


function App() {
  return (


    <div className="app">
      <Router>
        <Header />

        <Switch>

          {/* /search */}
          <Route path="/search">
            <SearchPage />
          </Route>

          {/* / */}
          {/* Default home page always at the bottom (fallback)*/}
          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
