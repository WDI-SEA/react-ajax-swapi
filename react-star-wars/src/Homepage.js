import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const Homepage = (props) => {
    console.log(props)
    let [ships, setShips] = useState([]) //holding the starships in state
    useEffect(() => {
        let url = `https://swapi.dev/api/starships/` //getting data from API
        axios.get(url)
        .then(res => {
          //console.log(res.data.results)
          setShips(res.data.results) //setting state
        })
      }, [])

      ships = ships.map((s, i) => {
        return (<li key={i}>
            <Link to={{
              pathname: '/starship',
              state: s
            }}
            key={i}
            >
            {s.name} 
            </Link>
        </li>
      )
      })

      return(
        <div>
          <h1>Starships from Star Wars!</h1>
          {ships}
        </div>
      )
    }
    
    export default Homepage; 