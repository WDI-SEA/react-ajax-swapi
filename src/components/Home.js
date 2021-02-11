// import {useEffect, useState} from 'react'
// import { BrowserRouter as Router, Route, link } from 'react-router-dom'
// import DisplayShip from './DisplayShip'


// function Home () {
//     const[ship, setShip ] = useState([])

//     useEffect(() =>{
//         fetch('https://swapi.dev/api/starships/')
//         .then(response => response.json())
//         .then(jsonData => {
//             setShip(jsonData.results);
//         })
//     }, [])
   
    
//     return(
//         <main>

//     <div>
//         <header>Star Wars STARSHIP</header>
//         {/* <DisplayShip ship={}/> */}
//     </div>
//     <div>
//         {ship.map(( ship, i ) => (

//         <DisplayShip ship={ship} key={i}/>
//         ))}
//     </div>

//         </main>

//     )
// }
// export default Home