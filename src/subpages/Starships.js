import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Starships = (props) => {
    
    
    console.log(props, 'getting data from starShips')
    let list
    if (props.ships) {
        list = props.ships.map((ship, i) => {
            return (
                <li key={`ship-key${i}`}>
                    <Link to={{
                        pathname: `/${ship.name}`,
                        data: ship
                    }}>{ship.name}
                    </Link>
                </li> 
            )
        })
    }
    

    return (
        <div className="ship-list-container">
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default Starships