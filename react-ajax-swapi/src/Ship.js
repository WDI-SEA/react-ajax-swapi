import React from 'react';

const Ship = (props) => {
    console.log(props.location.state.ships)

    return(
        <div>
            <h1>hello</h1>
            <p>
                {props.location.state.ships.name}
            </p>
            <p>
                {props.location.state.ships.model}
            </p>
        </div>
    )
}

export default Ship;