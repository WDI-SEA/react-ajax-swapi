import { Link } from 'react-router-dom'

const ShipList = props => {
    let ships = '';
    if (props.shipData.length < 1) {
        return (
            <h1>Loading!</h1>
        )
    } else {
        ships = props.shipData.map((ship, i) => {
            return (
                <button key={i}><Link to={`/starshippage/${ship.created}`}>{ship.name}</Link></button>
            )
        })
    }
    return (
        <div className="Ship list">
        <h1>The ships</h1>
            {ships}
        </div>
    )
}

export default ShipList