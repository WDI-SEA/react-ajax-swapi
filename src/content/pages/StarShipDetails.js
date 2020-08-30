import React, {useState, useEffect} from 'react';
import './StarShipDetails.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Pilot from '../components/Pilot'

function StarShipDetails({location}) {
    let starShipDetails = {location}.location.state
    



    return(
        <div className="detailDiv" >

            <h1>Name: {starShipDetails.name}</h1>
            <h3>Model: {starShipDetails.model}</h3>
            <h3>Maximum Speed: {starShipDetails.max_atmosphering_speed}</h3>
            <h3>Manufacturer: {starShipDetails.manufacturer}</h3>
            {/* {showPilots()} */}
            {starShipDetails.pilots.length && <Pilot pilotUrls={starShipDetails.pilots}/>}
            {!starShipDetails.pilots.length && <h3>Runs on AutoPilot</h3>}
            <Link to="/"><h2>Return</h2></Link>
        </div>
    )
}
export default StarShipDetails;