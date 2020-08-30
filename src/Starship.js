import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from 'react-router-dom';



export default function Starship() {

let [starships, setStarships] = useState([])
useEffect(() => {
    let url = `https://swapi.dev/api/starships/`
    axios.get(url)
    .then(res =>{
        setStarships(res.data.results)
        console.log(res.data.results)
    }).catch(err => console.log(err))

}, [])

    starships = starships.map((starship, index) => {
    return(
        <button>
        <Link
        to={{
        pathname: '/starship',
        state: starship
        }}
        key={starship.name}
        >
        {starship.name}
        </Link>
        </button>
    
        
    ) 
})

  return (
      <div>
         {starships}
      </div>
  )

}



