import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Starship from './Starship'
import StarShipPage from './StarShipPage'


function App() {
  
  return (
   <Router>
  <Switch>
    <Route exact path='/' component={Starship}/>
    <Route path='/starship' render={({location}) => 
    <StarShipPage location={location}/>
    }/>
  </Switch>
   </Router>
  );
}

export default App;
