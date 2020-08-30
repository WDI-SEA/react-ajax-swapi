import React from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Homepage from './Homepage';
import StarshipPage from './StarshipPage';

function App() {
  // set ships array in state to api call data once ( empty [])
 
  return (
    <>
    <h1 className='page-title'>Star Wars Starships</h1>
    <Router>
      <div className="App">
        <Route exact path='/' render={() => <Homepage /> } />
        <Route path='/starship' render={({location}) => 
          <StarshipPage location={location}/>
        }/>
      </div>
    </Router>
    </>
  );
}

export default App;
