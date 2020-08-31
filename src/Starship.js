import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Link
}from 'react-router-dom';

export default function Starship() {
    let [starShip, setStarShip] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        let url = 'https://swapi.dev/api/starships/'
        axios.get(url)
        .then(res => {
            setLoading(false)
            setStarShip(res.data.results)
        })
        .catch(error => console.log(error))
    }, [])
    if (!loading) {
        return(
          <div className="container">
          <h1 className="ti">Star Wars Ships</h1>
                    {starShip = starShip.map((s, idx) => {
                        return(

                            <div className="Item" key={idx}>

                                <button className="button">
                                    <Link className="link" to={{
                                        pathname: '/starship',
                                        state: s
                                    }}
                                    key={s.name}
                                    >
                                    {s.name}
                                    </Link>
                                </button>
                            </div>
                        )
                    })}
                </div>
        )
    } else {
        return(
            <h1 className="loading App-logo ">Loading...</h1>
        )
    }
}

   

