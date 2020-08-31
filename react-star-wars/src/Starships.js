import React , {useState, useEffect} from "react"
import axios from "axios"
// import StarshipData from "./StarshipData"
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom"

export default function Starships(props){
    let [starShips, setStarShips] = useState([]);
	useEffect(() => {
		let url = 'https://swapi.dev/api/starships/';
		axios
			.get(url)
			.then((response) => {
				console.log(response.data.results)
				setStarShips(response.data.results);
			})
			.catch((err) => console.log(err));
	}, []);
 
    starShips = starShips.map((starShips, idx)=>{
    return(
        <li key={idx}>
            <button>
                <Link className="shipName" to={{
                    pathname:"./starshipData",
                    state: starShips
                }}
                key={starShips.name}
                >
                {starShips.name}
                </Link>
            </button>
        </li>
        
    )
})


 
    return(
        <div className="landing">
			<h1>Star Ships</h1>
            <div className="shipName">
            {starShips}
            
            </div>
			
		</div>
    )
       
    

}