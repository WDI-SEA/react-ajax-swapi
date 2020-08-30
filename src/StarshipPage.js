import React from 'react';
import {useHistory} from 'react-router-dom'


const StarshipPage = (props) => {
  console.log('props', props)
  let history = useHistory();
  return(
    <div className='details'>
      <h1>
        {props.location.state.name}
      </h1>
      <h3>
        MODEL: {props.location.state.model}<br />
      </h3>
      <h4>
        COST: {props.location.state.cost_in_credits} credits
      </h4>
      <button className='go-back' onClick={() => history.goBack()}>Return to Starship List</button>
    </div>
  )
}

export default StarshipPage;