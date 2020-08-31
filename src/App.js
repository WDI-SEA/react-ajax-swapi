import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from 'axios'

import StarshipList from './StarshipList'
import Detail from './Detail'


function App() {
  const [ships, setShips] =  useState({ hits: [] })

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships`)
      .then((res) => {
        setShips(res.data)
      })
  }, [])

  return (
    <Router>
      <div className="App">
          <header>
            <h1 style={{background: 'teal', color: 'purple'}}>Star Wars Starships</h1>
          </header>
          <Route exact path="/" render={() => <StarshipList ships={ships}/> } />
          <Route path="/detail" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
