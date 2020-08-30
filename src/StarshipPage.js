import React from 'react';

const StarshipPage = (props) => {
  return(
    <div>
      <h1>Details</h1>
      <ul>
        <li>name: {props.name} </li>
        <li>model: {props.model} </li>
      </ul>
    </div>
  )
}

export default StarshipPage;