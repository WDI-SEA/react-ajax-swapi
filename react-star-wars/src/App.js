import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
// import logo from './deathstar.png';
import './App.css';
// import Main from './Main'
import Starships from "./Starships"
// import axios from 'axios';
import StarshipData from "./StarshipData"
// import Loading from "./Loading.js"

function App() {

  return (
    <div className="app">
{/* <Loading /> */}

    <Router>
    
    
      <Switch>
        <Route exact path="/" component={Starships} />
        {/* <Route path="/starships" render={() => <Starships starShips={starShips} />} /> */}
        <Route path="/starshipData" render={({location}) => 
        <StarshipData location={location} />} />


      </Switch>
   
    </Router>
    </div>
  );
}

export default App;
