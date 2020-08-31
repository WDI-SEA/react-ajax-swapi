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
    <div className='App'>
    <nav>
      <h1>STAR WARS STARSHIPS</h1>
    </nav>
    <Route exact path='/' component={Starship}/>
    <Route path='/starship' render={({location}) => 
    <StarShipPage location={location}/>
    }/>
    </div>
  </Switch>
   </Router>
  );
}

export default App;
