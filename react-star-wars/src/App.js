import React from 'react';

import {
  BrowserRouter as Router,
  Route, 
  Link,
} from 'react-router-dom'

import './App.css';
import Homepage from './Homepage';
import StarshipPage from './StarshipPage';


function App() {
  return (
      <>
       <h1 className="title">Star Wars Starships</h1>
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
