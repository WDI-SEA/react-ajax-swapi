import { Link } from 'react-router-dom';

const StarshipPage = props => {
  const ship = props.location.state;
  return (
    <div className="ship-deets">
      <p>Name: {ship.name}</p>
      <p>Model: {ship.model}</p>
      <Link to="/starships">Return</Link>
    </div>
  )
}

export default StarshipPage;