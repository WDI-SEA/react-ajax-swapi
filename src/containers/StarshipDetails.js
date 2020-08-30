import React from 'react';
import Starships from './Starships';
import { Link } from 'react-router-dom';

const StarshipDetails = ({ location }) => {
	// let starship = location.state;
	return (
		<div className='theFLEETDEETZ'>
      Name: {/* {starship.name} */}
      Model: {/* {starship.model} */}
			 
			<Link to={{ pathname: '/' }} className='abandonShip'>
				Return, to the Fleet my liege.
			</Link>
		</div>
	);
};

export default StarshipDetails;
