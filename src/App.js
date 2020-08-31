  
import React from 'react';
import './App.css';
import Starship from './Starship'
import StarShipPage from './StarShipPage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


export default function App() {
  
  return (
   <Router>
  <Switch>
    <Route exact path='/' component={Starship}/>
    <Route path='/starship' render={({location}) => 
    <StarShipPage location={location}/>}/>
  </Switch>
   </Router>
  )
}


