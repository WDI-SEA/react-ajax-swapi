import React from 'react';
import { useHistory } from 'react-router-dom';

const StarshipPage = (props) => {
    let history = useHistory();
    return (
        <div div="shipDetails" id="shipDetails"> 
            <h3>NAME: {props.location.state.name}</h3>
            <h3>MODEL: {props.location.state.model}</h3>
            <h3>LENGTH: {props.location.state.length} meters</h3>
            <h3>CARGO CAPACITY: {props.location.state.cargo_capacity}kg</h3>
            <button onClick={() => history.goBack()}>Return</button>
        </div>
    )
}

export default StarshipPage;