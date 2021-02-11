import { Link } from 'react-router-dom';

const Starship = (props) => {
  return (
    <div className="ship-card">
      <Link to={{
        pathname: '/starship',
        state: props.ship
      }}>
      {props.ship.name}
      </Link>
    </div>
  );
}

export default Starship;