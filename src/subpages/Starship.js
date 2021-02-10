
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Starship = (props) => {
    let { id } = useParams()
    console.log(props, 'getting data from starship')

    let name = props.location.data.name
    let model = props.location.data.model

    return (
        <div className="shipInfoContainer">
            <div className="shipInfo">
                <p>Name: {name}</p>
                <p>Model: {model}</p>
                <Link to={{
                    pathname: '/'
                }}>Go Back</Link>
            </div>
        </div>
    )
}

export default Starship