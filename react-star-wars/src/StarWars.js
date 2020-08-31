import React, {useEffect, useState} from 'react';

import './App.css';
import StarShip from './Components/StarShip'
import ShipResults from './Components/ShipResults'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const StarWars = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    let url = "https://swapi.dev/api/starships/";
    axios
      .get(url)
      .then((res) => {
        setShips(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <h1>The Fleet</h1>
        <Route exact path='/' render={() => <ShipResults ShipResults={shipLinks}/>} />
        <Route path='/ship' render={({location}) =>
         <StarShip location={location}/>
         }/>
         </div>
    </Router>
  )

}

export default StarWars;