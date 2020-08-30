import React from 'react';
import StarShips from '../components/StarShips'

function Home(props) {
    
    return (
        <div className="starShipsDiv">
            {props.starShips.map((s,idx) => {
                return <StarShips key={idx} starShip={s} />
            })}
        </div>
    )
}

export default Home;