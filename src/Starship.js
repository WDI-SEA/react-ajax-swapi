import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from 'react-router-dom';


//   async function getPilots(urls) {
//     let urls = `https://swapi.dev/api/starships/pilots`
//     const promises = urls.map(url => fetch(url).then(res => res.json()));
//     const pilotObjects = await Promise.all(promises);
//     return pilotObjects;
//   }
  
//   getPilots(urls).then(pilots => console.log(pilots));





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


// {starships.length ? <StarShipPage  /> : <div>Loading..</div>}

if (!starships.length) {
    return <div>Loading...</div>
}

return(
 <div className="container"> 
        {starships = starships.map((starship, index) => {
        return(

            <div className="container2" key={index}>
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
            </div>
            
        ) 
    })}
    </div>
)

 

}



