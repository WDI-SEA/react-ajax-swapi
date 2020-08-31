import React, {Component} from 'react'

class StarshipList extends Component {
    render() {
        console.log('🎊', this.props.ships.results)
        // const shipList = this.props.ships.results.map((s, idx) => {
        //     return <button key={idx}
        //                 className="starshipButt">
        //                 {s}</button>
        // })
        
        return (
            <div>
                <h2>Starships</h2>
                {/* {shipList} */}
            </div>
        )
    }
}

export default StarshipList