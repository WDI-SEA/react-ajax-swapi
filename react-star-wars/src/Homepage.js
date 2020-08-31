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
        return (<div key={i} className="ship">
            <Link className="shipLinks" to={{
              pathname: "/starship",
              state: s
            }}
            key={i}
            >
            {s.name} 
            </Link>
        </div>
      )
      })
      
      return(
        <div>
          {/* <h1 className="pageTitle">STAR WARS STARSHIPS</h1> */}
          <div className="ship-container">
          {ships}
          </div>
        </div>
      )
    }
    
    export default Homepage; 