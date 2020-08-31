import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Axios from 'axios'

import StarshipList from './StarshipList'
import Detail from './Detail'


function App() {
  return (
    <Router>
      <div className="App">
          <header>
            <h1 style={{background: 'teal', color: 'purple'}}>Star Wars Starships</h1>
          </header>
          <Route exact path="/" component={StarshipList} />
          <Route exact path="/detail" component={Detail} />
      </div>
    </Router>
  );
}

export default App;
