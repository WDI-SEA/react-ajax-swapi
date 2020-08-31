import React, {useEffect, useState} from 'react';

import './App.css';
import StarShip from './Components/StarShip'
import ShipResults from './Components/ShipResults'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StarWars = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let url = "https://swapi.dev/api/starships/";
    axios
      .get(url)
      .then((res) => {
        setLoading(false)
        setShips(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if(!loading) {
  let shipLinks = ships.map((ship, i) => {
    return (
      <div key={i} className="Ship">
        <h1>{ship.name}</h1>
        
          <Link
            to={{
              pathname: "/ship",
              state: ship,
            }}
            ship={ship}
          >
            View More Info
          </Link>
        
      </div>
    );
  });
  return (
    <Router>
      <div className='HomePage'>
        <Route exact path='/' render={() => <ShipResults ShipResults={shipLinks}/>} />
        <Route path='/ship' render={({location}) =>
         <StarShip location={location}/>
         }/>
         </div>
    </Router>
  )
} else {
  return(
  <h1>Loading...</h1>
  )
}


}

export default StarWars;