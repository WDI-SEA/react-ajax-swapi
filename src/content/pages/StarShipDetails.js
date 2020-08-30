import React from 'react';
import './StarShipDetails.css'
import {Link} from 'react-router-dom'
import Pilot from '../components/Pilot'

function StarShipDetails({location}) {
    let starShipDetails = {location}.location.state

    const pilotInfo = starShipDetails.pilots.length
        ? <Pilot pilotUrls={starShipDetails.pilots}/>
        : <div>
            <h3>{starShipDetails.name} runs AutoPilot</h3>
            <h3> No Pilots Needed</h3>
        </div>

    return(
        <div className="detailDiv" >
            <h1>Name: {starShipDetails.name}</h1>
            <h3>Model: {starShipDetails.model}</h3>
            <h3>Maximum Speed: {starShipDetails.max_atmosphering_speed}</h3>
            <h3>Manufacturer: {starShipDetails.manufacturer}</h3>
            <br/>
            {pilotInfo}
            <Link to="/"><h2>Return</h2></Link>
        </div>
    )
}

export default StarShipDetails;