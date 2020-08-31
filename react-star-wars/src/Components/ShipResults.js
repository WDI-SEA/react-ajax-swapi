import React from "react";

const ShipResults = (props) => {
  return (
    <>
      <h1>The Fleet</h1>
      <div className="StarWars">{props.ShipResults}</div>
    </>
  );
};

export default ShipResults;
