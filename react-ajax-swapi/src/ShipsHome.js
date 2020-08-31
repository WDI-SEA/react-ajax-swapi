import React, {useState, useEffect} from "react";
import axios from "axios"

import {
    Link
  } from 'react-router-dom'

export default function ShipsHome(props) {
    let [starShips, setStarShips] = useState([]);

        useEffect(() => {
            let url = `https://swapi.dev/api/starships/`
            axios.get(url)
            .then((res) => {
                console.log(res.data.results)
                setStarShips(res.data.results)
            })
            .catch(err => console.log(err));
        }, [])

        if(!loading) {
            {let shipList = starShips.map((starShip, idx) => {
                return (
                    <div key={idx} className="container-grid">
                    <Link to={{pathname: './StarshipsPage', state: starShip}} key={starShip.name} style={{textDecoration: "none"}} className="buttons">{starShip.name}</Link> 
            </div>
                )
            })}
        } else {
            <h1>Loading...</h1>
        }

    return(
        <div>
            <h1>Star Ships</h1>
            {shipList}
        </div>
    )
}
