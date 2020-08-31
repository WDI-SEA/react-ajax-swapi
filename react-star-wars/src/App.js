import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage';
import StarshipPage from './StarshipPage';

function App() {

  return (
    <Router>
    <div className="App">
      <Route exact path='/' render={() => <Homepage/> } />
      <Route path='/starship' render={({location}) => <StarshipPage location={location}/> }/>
    </div>
    </Router>
  );
}
export default App;