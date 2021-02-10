import { useParams } from "react-router-dom";
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Starship = props =>{
    let {id} =useParams();
    console.log(id);
    return(
        <div class="ship-card">
            <h3>Name: {props.starship[id].name}</h3>
            <h3>Model: {props.starship[id].model}</h3>
            <Link to="/">Return</Link>
        </div>

    )
}

export default Starship;