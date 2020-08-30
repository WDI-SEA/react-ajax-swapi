import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css'

import {Link} from 'react-router-dom';

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
    .catch (err => console.log(err))
  }, [])

  // const allShips = props.ships.map((s, i) => {
  //   console.log(s.name)
  //   return <li key={i}>{s.name}</li>
  // })
  // if (!ships) {
  //   return <h1>No dice</h1>
  // }

  return(
    <div className='ship-container'>
    {ships = ships.map((s, i) => {
      return (
        <div key={i} className='ship'>
          <Link to={{
            pathname: '/starship',
            state: s
          }}
          key={i}
          className='link-text'
          >
          {s.name} 
          </Link>
      </div>
      
    )
    })}

    </div>
  )
  
}

export default Homepage;