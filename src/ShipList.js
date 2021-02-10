import { Link } from 'react-router-dom'

const ShipList = props => {
    let ships = '';
    if (props.stuff.length < 1) {
        return (
            <h1>Loading!</h1>
        )
    } else {
        // console.log(props.stuff)
        ships = props.stuff.map((ship, i) => {
            return (
                <button key={i}><Link to={`/starshippage/${ship.created}`}>{ship.name}</Link></button>
            )
        })
    }
    return (
        <div className="whatever">
        <h1>Ermagerd Sherps</h1>
            {ships}
        </div>
    )
}

export default ShipList