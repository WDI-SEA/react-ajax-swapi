import React from 'react';
import { useHistory } from 'react-router-dom';

const StarshipPage = (props) => {
    let history = useHistory();
    return (
        <div div="shipDetails" id="shipDetails"> 
            <h3>NAME: {props.location.state.name}</h3>
            <h3>MODEL: {props.location.state.model}</h3>
            <button onClick={() => history.goBack()}>Return</button>
        </div>
    )
}

export default StarshipPage;