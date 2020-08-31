import React from 'react';
import { useHistory } from 'react-router-dom'

const StarshipPage = (props) => {
  //console.log('props', props)
  let history = useHistory();
  return(
    <div className="detail-container">
      <h3>NAME:{" "} { props.location.state.name} </h3>
      <h3>MODEL:{" "} { props.location.state.model}</h3>
      <h3>PASSENGERS:{" "} { props.location.state.passengers}</h3>
      <h3>MANUFACTURER:{" "} { props.location.state.manufacturer}</h3>
      <h3 className="goBackLink" onClick={() => history.goBack()}>RETURN</h3>
    </div>
  )
}

export default StarshipPage;