
import './App.css';
import { useEffect, useState } from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Starship from './Starship';

function App() {
  const [ships, setShips] = useState([])

  useEffect(()=> {
      fetch('https://swapi.dev/api/starships/')
      .then(response=>response.json())
      .then(jsonData=>{
          setShips(jsonData.results);
          console.log(jsonData.results);
      });
  }, []);

  const list=ships.map((ship, i)=>{
      return(
        
          <Link to={`/starships/${i}`}>{ship.name}</Link>
          //<h3>{ship.name}</h3>
          
      )
  })
  return (
      <Router>
        <header>
          <h1>Star Wars Starships</h1>
          <nav>
            
          </nav>
        </header>
        <div class="starship-list">
          <Route path="/starships/:id" render={()=>
            
          <Starship starship={ships} />
          } />
          {list}
        </div>
       
      </Router>
    
  );
}

export default App;
