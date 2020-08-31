import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarshipPage from './StarshipPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const Homepage = (props) => {
    console.log(props)
    let [ships, setShips] = useState([])
    useEffect(() => {
        let url = `https://swapi.dev/api/starships/`
        axios.get(url)
        .then(res => {
          console.log(res.data.results)
          setShips(res.data.results)
        })
      }, [])

      ships = ships.map((s, i) => {
        return (<li key={i}>
            <Link to={{
              pathname: 'starship',
              state: s
            }}
            key={s.name}
            >
            {s.name} 
            </Link>
        </li>
      )
      })

      return(
        <div>
          <h1>Starships</h1>
          {ships}
        </div>
      )
    
    }
    
    export default Homepage; 