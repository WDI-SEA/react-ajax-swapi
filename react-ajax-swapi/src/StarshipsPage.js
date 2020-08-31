import React from 'react';
import {
    Link
} from 'react-router-dom'

const StarshipsPage = (props) => {
    return (
        <div>
            <h3>{props.location.state.name}</h3>
            <h5>Model: {props.location.state.model}</h5>
            <h5>Manufacturer: {props.location.state.manufacturer}</h5>
            <h5>Cost in Credits: {props.location.state.cost_in_credits}</h5>
            <h5>Length: {props.location.state.length}</h5>
            <h5>Capacity: {props.location.state.passengers}</h5>
            <h5>Class: {props.location.state.starship_class}</h5>

            <Link to={{pathname:"/"}}>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default StarshipsPage;