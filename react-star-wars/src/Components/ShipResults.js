import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ShipResults = (props) => {
    console.log(props.ships)
  let newShips = props.ships.map((s, i) => {
    return (
        <Router>
      <div className='Ship'>
          <h1>{s.name}</h1>
        <button>
          <Link to="/ship"></Link>
        </button>
      </div>
      </Router>
    );
  });

  return (
    <div>
      {newShips}
    </div>
  );
};

export default ShipResults;
