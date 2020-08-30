import React, {useState} from 'react';
import {Link} from 'react-router-dom'


function StarShips(props) {

    let location ={
        pathname: '/starShipDetails',
        state: props.starShip
    }

    return(
        <div>
            
            <Link 
            to={location}
            key={props.starShip.name}
            > <div className="starShip">{props.starShip.name}</div></Link>
            
        </div>
    )
}

export default StarShips;