import React from 'react';
// import Starships from './Starships';
import { Link } from 'react-router-dom';

const StarshipDetails = ({ location }) => {
	let starship = location.state;
	return (
		<div className='shipbox2'>
			<div className='fleetdeetz'>
				<h2>Name &#8227; {starship.name}</h2>
				<h2>Model &#8227; {starship.model}</h2>
				<h2>Manufacturer &#8227; {starship.manufacturer}</h2>
				<h2>Cost &#8227;&#3647; {starship.cost_in_credits}</h2>
				<h2>Crew &#8227; {starship.crew}</h2>
				<h2>Cargo Capacity &#8227; {starship.cargo_capacity}</h2>
				<h2>Consumables Duration Stock &#8227; {starship.consumables}</h2>
				<h2>Hyperdrive Rating &#8227; {starship.hyperdrive_rating}</h2>
				<h2>Starship Class &#8227; {starship.starship_class}</h2>
				<br></br>
				<Link
					to={{ pathname: '/' }}
					style={{ textDecoration: 'none' }}
					className='abandonShip'
				>
					Return, to the Fleet my liege.
				</Link>
			</div>
		</div>
	);
};

export default StarshipDetails;
