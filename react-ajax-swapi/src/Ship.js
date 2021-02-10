import React from 'react';
import { Link } from 'react-router-dom';

const Ship = (props) => {
    console.log(props.location.state.ships)

    return(
        <div>
            <div className="container">
                <h1>hello</h1>
                <p>
                    {props.location.state.ships.name}
                </p>
                <p>
                    {props.location.state.ships.model}
                </p>
                <button>
                <Link to={'/'}>Return Home</Link>
                </button>
            </div>
        </div>
    )
}

export default Ship;