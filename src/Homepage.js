import React from 'react';

const Homepage = (props) => {
  console.log(props)

  const allShips = props.ships.map((s, i) => {
    console.log(s.name)
    return <li key={i}>{s.name}</li>
  })
  
  return(
    <div>
      <h1>Starship Homepage</h1>
      <ul>
        {allShips}
      </ul>
    </div>
  )
}

export default Homepage;