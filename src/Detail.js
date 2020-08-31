import React, {Component} from 'react'

class Detail extends Component {
    render() {
        return (
            <div>
                <h2>starship.name</h2>
                {/* <image src={starship.img_url} alt="{starship.name}"></image> */}
                <p>starship.model</p>
                <a href="/">Return to starships</a>
            </div>
        )
    }
}

export default Detail