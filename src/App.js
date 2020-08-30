import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const getShips = e => {
    e.preventDefault()
    let url = `https://swapi.dev/api/starships/schema`
    axios.get(url)
    .then(res => {
      console.log(res)
    })
  }

  return (

    <div className="App">
      <h1 onClick={getShips}>Star Wars Starships</h1>
    </div>
  );
}

export default App;
