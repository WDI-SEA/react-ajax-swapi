import React from "react";

const Homepage = (props) => {
    console.log(props)

    let starships = props.ships.map((s, i) => {
        console.log("-------------", s.name)
        return <li key={i}>{s.name}</li>
      })
    
      return(
        <div>
          <h1>Starships</h1>
          <ul>
            {starships}
          </ul>
        </div>
      )
    }
    
    export default Homepage; 
