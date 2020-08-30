import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Homepage = () => {
  const [ships, setShips] = useState([])
  
  useEffect(() => {
      let url = `https://swapi.dev/api/starships`
      axios.get(url)
      .then(res => {
          console.log(res.data.results)
          setShips(res.data.results)
      }).catch (err => (console.log(err, 'error')))
  }, [])

  return (
      
    <div>

       
        {ships.map((s,i) => {
            return (
                <Link 
                    to={{
                        pathname: 'starship',
                        state: s
                    }}
                    key={i}
                >
                    {s.name}
                  </Link>
              )
          })}
      </div>

  )
  
}

export default Homepage;
