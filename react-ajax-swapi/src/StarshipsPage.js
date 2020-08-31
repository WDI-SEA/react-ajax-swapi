import React from 'react';
import ShipsHome from './ShipsHome'
import {
    Link
} from 'react-router-dom'

const StarshipsPage = (props) => {
    return (
        <div>
            <h1>{props.location.state.name}</h1>
        </div>
    )
}

export default StarshipsPage;