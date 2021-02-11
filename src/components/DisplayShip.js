import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

const DisplayShip = props =>{
    console.log(props.ship)
    let [ships, setShips ] = useState([])

  useEffect(() =>{
      fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(jsonData => {
          setShips(jsonData.results);
      })
  }, [])
    if (!ships.length){
        return(
            <div>
                <img src="https://i.stack.imgur.com/cSReb.jpg" alt="Millennium Falcon"/>
            </div>
        )
    }
    ships=ships.map((ship, i) => {
        return(
            <h4 key={i}>
            <Link to={{pathname:"/ship/data", state:ship}} key={ship.name} >{ship.name}</Link>
            </h4>
        )
    }
    )
    return(

    <div>
       {ships}       
    </div>

    )

}
export default DisplayShip