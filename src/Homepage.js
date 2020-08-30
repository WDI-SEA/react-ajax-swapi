import React, {useState, useEffect} from 'react';
import StarshipPage from './StarshipPage';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const Homepage = (props) => {
  let [ships, setShips] = useState([])
  // const location = useLocation();

  useEffect(() => {
    let url = `https://swapi.dev/api/starships/`
    axios.get(url)
    .then(res => {
      console.log(res.data.results)
      setShips(res.data.results)
    })
  }, [])

  // const allShips = props.ships.map((s, i) => {
  //   console.log(s.name)
  //   return <li key={i}>{s.name}</li>
  // })


  ships = ships.map((s, i) => {
    return (<li key={i}>
        <Link to={{
          pathname: '/starship',
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
      <h1>Starship Homepage</h1>
      {ships}
    </div>
  )
  
}

export default Homepage;