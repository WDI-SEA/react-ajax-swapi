import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'


const StarshipPage = (props) => {
  console.log('props', props)
  let history = useHistory();
  return(
    <div>
      <h1>Details</h1>
        <h2>
          NAME: {props.location.state.name}
        </h2>
        <h3>
          MODEL: {props.location.state.model}<br />
        </h3>
        <h4>
          COST: {props.location.state.cost_in_credits} credits
        </h4>
        <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  )
}

export default StarshipPage;