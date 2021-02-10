import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
    //console.log(props)

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
        <div className="ship-list">
            <ul>
                {list}
            </ul>
        </div>
    )

}

export default StarshipPage;