import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage';
import StarshipPage from './StarshipPage';

function App() {
  const [ships, setShips] = useState([])

  // set ships array in state to api call data once ( empty [])
  useEffect(() => {
    let url = `https://swapi.dev/api/starships/`
    axios.get(url)
    .then(res => {
      console.log(res.data.results)
      setShips(res.data.results)
    })
  }, [])

  // const showShips = () => {
  //   ships.map((s, i) => {
  //     console.log(s.name)
  //     return (
  //       <li key={i}>{s.name}</li>
  //     )
  //   })
  // }


  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{' '}
        </nav>
        <Route exact path='/' render={() => <Homepage ships={ships} /> } />
      </div>
    </Router>
 
  );
}

export default App;
