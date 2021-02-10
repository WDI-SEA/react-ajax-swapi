import './App.css';
import StarshipPage from './StarshipPage'
import ShipList from './ShipList'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(jsonData => {
        setShips(Object.values(jsonData.results))
     // I still dont get the empty [] here
      })
  }, [])

  return (
    <Router>
      <div className="App">
        <Route exact path='/' render={() => <ShipList shipData={ships} />} />
        <Route path='/starshippage/:id' render={(props) =>{
      let ship = ships.find(({ created }) => created == props.match.params.id)
      props = {...ship, ...props}
      return <StarshipPage {...props} />
    }} />
      </div>
    </Router>
  );
}

export default App;