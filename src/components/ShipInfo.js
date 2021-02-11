import React from 'react'
import { useHistory, useLocation } from 'react-router'

const ShipInfo = (props) => {
    console.log(props)
    
    const location = useLocation()
    const history = useHistory() 

function goBack () {
        history.goBack()
}
    return (
        <div>
        <h4>NAME:{location.state.name}</h4>
        <h4>MODEL:{location.state.model}</h4>
            
            <button onClick={goBack}>Go back</button>
        </div>
    )
}
export default ShipInfo