import React, {useState, useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

import ShipsHome from './ShipsHome'

function App() {
  return (
    <Router>
    <div className="App">
        <nav>
          <Link to="/">Go Back to Home</Link>
        </nav>
        <Route exact path="/" component={ShipsHome} />
        <Route path="/StarshipsPage" render={({location}) => <StarshipPage location={location}/>}/>
    </div>
    </Router>
  );
}

export default App;
