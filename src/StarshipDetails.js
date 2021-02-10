import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StarshipDetails = (props) => {

    let { id } = useParams()
    //console.log(props);

    let name = props.location.data.name
    let model = props.location.data.model

    return (
        <div className="shipinfo">
            <p>Name: {name}</p>
            <p>Model: {model}</p>
            <Link to={{
                pathname: '/'
            }}>Home</Link>
        </div>
    )
}

export default StarshipDetails;