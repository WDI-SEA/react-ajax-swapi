import { Link } from "react-router-dom"

const StarshipPage = (props) => {
    return(
        <div className="details">
        <h1>Ship details</h1>
            <h2>Name: {props.name}</h2>
            <h2>Model: {props.model}</h2>
            <Link to='/'>Return</Link>
        </div>
    )
}

export default StarshipPage