import React from 'react';
import { useHistory } from 'react-router-dom'

const StarshipPage = (props) => {
  //console.log('props', props)
  let history = useHistory();
  return(
    <div>
      <h1>{props.location.state.name} Details</h1>
      <h3>Name: {props.location.state.name}</h3>
      <h3>Model: {props.location.state.model}</h3>
      <h3>Passengers: {props.location.state.passengers}</h3>
      <h3>Manufacturer: {props.location.state.manufacturer}</h3>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  )
}

export default StarshipPage;