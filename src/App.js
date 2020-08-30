import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [ships, setShips] = useState([])

  // const getShips = () => {
  //   let url = `https://swapi.dev/api/starships/`
  //   axios.get(url)
  //   .then(res => {
  //     setShips(res.data.results)
  //     console.log(res.data.results)
  //   })
  // }
  const showShips = () => {
    ships.map((s, i) => {
      console.log(s.name)
      return (
        <li key={i}>{s.name}</li>
      )
    })
  }

  // useEffect(() => {
  //   let url = `https://swapi.dev/api/starships/`
  //   axios.get(url)
  //   .then(res => {
  //     setShips(res.data.results)
  //     console.log(res.data.results)
  //   })
  // })


  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <button>get ships</button>
      <button onClick={showShips}>show ships</button>
    </div>
  );
}

export default App;
