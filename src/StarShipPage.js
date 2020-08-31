import React from 'react';
import {useLocation, useHistory} from 'react-router'


export default function StarShipPage(props) {
    const location = useLocation();
    const history = useHistory();
    function goToHome() {
        history.goBack()
    }
    // console.log(location.state.model)
    // console.log(location.state.name)


    return(
        <div className="contDiv">
            
            <div className="detail">
            Model: {location.state.model}
            </div>
            <div className="detail">
            Name: {location.state.name}
            </div>
            <button className="goBack" onClick={goToHome}>Go Back</button>
        </div>
        
    )
}