import React, {Component} from 'react'

function StarshipList(props) {
    let shipList = props.ships.results
    return (
            {shipList.map((s, idx) => {
                return <button key={idx}>{s.name}</button>
            })}
    )
}

export default StarshipList