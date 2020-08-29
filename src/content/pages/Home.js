import React from 'react';
import StarShips from '../components/StarShips'

function Home(props) {
    let starShips= props.starShips.results
    return (
        <div>
            {starShips.map((s,idx) => {
                return <StarShips key={idx} starShips={s}/>
            })}
        </div>
    )
}

export default Home;