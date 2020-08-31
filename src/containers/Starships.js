import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Starships = () => {
	let [starships, setStarships] = useState([]);
	const URL = 'https://swapi.dev/api/starships/';

	async function maceWindu() {
		try {
			const result = await axios.get(URL);
			console.log(result);
			setStarships(result.data.results);
		} catch (error) {
			console.log('Payload Error:🍆', error);
		}
	}

	useEffect(() => {
		maceWindu();
	}, []);

	const ships = starships.map((starship, idx) => {
		let location = {
			pathname: '/starshipdetails',
			state: starship,
		};

		return (
			<Link
				className='shipbox'
				key={idx}
				to={location}
				style={{ textDecoration: 'none' }}
			>
				<div>
					<h1>{starship.name}</h1>
				</div>
			</Link>
		);
	});

	return <div className='fleet'>{ships}</div>;
};

export default Starships;
