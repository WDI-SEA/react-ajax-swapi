import React from 'react';

import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom'

import './App.css';
import Homepage from './Homepage';
import StarshipPage from './StarshipPage';


function App() {
  return (
   
     <Router>
        <div className="App">
        <Router exact path='/' render={() => <Homepage /> } />
          <Router path='/starship' render={({location}) => 
              <StarshipPage location={location}/>
            }/>
        </div>
     </Router>
  );
}

export default App;
