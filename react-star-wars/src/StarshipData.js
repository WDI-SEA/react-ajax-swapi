import React from 'react';
import Starships from "./Starships"
import {useLocation, useHistory} from "react-router"

export default function StarshipData(props) {
    const location = useLocation();
    const history = useHistory();
    // console.log(props.location)
    function timeTravel(){
        history.goBack()
    }
    return (
        <div className="data">
         <h1 className="dataName">Starship Info</h1>
            <br/>
         
         
        <div className="name">
           Name: {location.state.name}
        </div>
        
         <br/>
         <div className="model">
         Model: {location.state.model}
         
          
      </div>
      <br/> 
      <div classNmae="speed">
      Max earth-like atmospheric speed: {location.state.max_atmosphering_speed} km/h
      </div>
      <br/> 
      <div>
          <button className="home" onClick={timeTravel}>Landing Page</button>
      </div>
      <br/>
         <br/>
         <br/>
         <br/>
         <br/>
      <img className={location.state.name}></img>
      </div>
    )
}