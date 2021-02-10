import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Ships from './Ships';


//get access to the database and make a component for it to link to

function App() {
  const [starship, setStarship] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships')
    .then(response => response.json())
    .then(jsonData => {
      setStarship(Object.values(jsonData))
    })
  }, [])



  return (
    <Router>
      <div className="App">
        <Route
          path='/'
          render={()=> <Ships starship={starship}/>}
        />

      </div>
    </Router>
  );
}

export default App;
