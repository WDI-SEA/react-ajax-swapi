import React, {useState, useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage';
import StarshipPage from './StarshipPage';

function App() {
  // set ships array in state to api call data once ( empty [])
  // useEffect(() => {
  //   let url = `https://swapi.dev/api/starships/`
  //   axios.get(url)
  //   .then(res => {
  //     console.log(res.data.results)
  //     setShips(res.data.results)
  //   })
  // }, [])

 
  return (
    <Router>
      <div className="App">
        {/* <Homepage /> */}

        <Route exact path='/' render={() => <Homepage /> } />
        {/* <Route path='/starship_page' render={()=> <StarshipPage />} /> */}
        <Route path='/starship' render={({location}) => 
          <StarshipPage location={location}/>
        }/>
      </div>
    </Router>
 
  );
}

export default App;
