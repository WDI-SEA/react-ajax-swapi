import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Ships = (props) => {
    let ships
    if (props.starship.length != 0) { 
        console.log(props.starship[3])
        ships = props.starship[3].map((ship, i) => {
            return (
                <li key={i}>
                    <Link to={{
                        pathname: `/ship/${ship.name}`,
                        state: {ships:ship}
                    }}>{ship.name}</Link>
                </li>
            )
        }); 
    } 
    return(
        <div>
            <h1>Star Wars Ships</h1>
            {ships}
        </div>
    )
}

export default Ships;