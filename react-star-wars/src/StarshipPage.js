import React from 'react';
import { useHistory } from 'react-router-dom';

const StarshipPage = (props) => {
    let history = useHistory();
    return (
        <div> 
            <h1>Details on your ship!</h1>
            <h3>NAME: {props.location.state.name}</h3>
            <h3>MODEL: {props.location.state.model}</h3>
            <button onClick={() => history.goBack()}>Return</button>
        </div>
    )
}

export default StarshipPage;