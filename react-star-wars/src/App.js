import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './Homepage';


function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    let url = `https://swapi.dev/api/starships/`
    axios.get(url)
    .then(res => {
      console.log(res.data.results)
      setShips([res.data.results])
    })
  }, [])


  return (
    <Router>
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>{' '}
      </nav>
      <Route exact path='/' render={() => <Homepage ships={ships} /> } />
      {/* <Homepage /> */}
    </div>
  </Router>
  );
}
export default App;