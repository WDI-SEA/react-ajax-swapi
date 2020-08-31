import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeStar from './Components/HomeStar'
import StarShip from './Components/StarShip'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StarWars = () => {

  return (
    <Router>
      <div>
        <Route exact path='/' render={(props) => <HomeStar />} />
        <Route exact path='/ship/:id' render={(props) => <StarShip />}/>
      </div>
    </Router>
  )

}

export default StarWars;