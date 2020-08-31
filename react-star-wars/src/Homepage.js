import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Homepage = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
      let url = `https://swapi.dev/api/starships`
      axios.get(url)
      .then(res => {
          console.log(res.data.results);
          setLoading(false);
          setShips(res.data.results);
      }).catch (err => (console.log(err, 'error')))
  }, [])
  if(!loading) {
    return (
        <div className="s-container">
             
          {ships.map((s,i) => {
            return (
            <div className="shipList">  
                <Link 
                    to={{
                        pathname: 'starship',
                        state: s
                    }}
                        key={i}
                    >
                    <button className="name">{s.name}</button>
                </Link>
            </div>   
                  )
              })}
          </div>
      )
  } else {
      return (
          <h1>Loading...</h1>
      )
  }
}

export default Homepage;
