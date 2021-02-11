import { useEffect, useState } from 'react';
import axios from 'axios';

import StarshipButton from './StarshipButton';

const Starships = props => {
  const [ships, setShips] = useState([]);

  useEffect(async () => {

    const response = await axios.get('https://swapi.dev/api/starships/')
    const response2 = await axios.get('https://swapi.dev/api/starships/?page=2')
    const response3 = await axios.get('https://swapi.dev/api/starships/?page=3')
    const response4 = await axios.get('https://swapi.dev/api/starships/?page=4')

    setShips([
      ...response.data.results,
      ...response2.data.results,
      ...response3.data.results,
      ...response4.data.results
    ])
  }, [])

  let allShips = ships.map(ship => <StarshipButton key={ship.name} ship={ship} />)

  return (
    <div>
      <h3>Starshipz</h3>
      {allShips}
    </div>
  );
}

export default Starships;