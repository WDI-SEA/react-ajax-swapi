import React from 'react';
import {useLocation, useHistory} from 'react-router'


export default function StarShipPage(props) {
    console.log(props)
    console.log(props.location)
    const location = useLocation();
    const history = useHistory();
    function goToHome() {
        history.goBack()
    }


    return(
        <div>
            
            <div>
            Model: {location.state.model}
            </div>
            <div>
            Name: {location.state.name}
            </div>
        <div>
            <button className="goBack" onClick={goToHome}>Go Back</button>
        </div>
        </div>
    )
}