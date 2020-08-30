import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Starships = () => {
	let [starships, setStarships] = useState([]);
	const URL = 'https://swapi.dev/api/starships/';
	axios
		.get(URL)
		.then(result => {
			setStarships(result.data.results);
		})
		.catch(error => {
			console.log('Payload Error:🍆', error);
		});
	const ships = starships.map((starship, idx) => {
		let location = {
			pathname: '/starshipdetails',
      state: starship
		}

		return (
			<Link to={location}>
				<div key={idx} className='theFLEET'>
					<h1>{starship.name}</h1>
				</div>
			</Link>
		);
	});

	return <div>{ships}</div>;
};

export default Starships;
