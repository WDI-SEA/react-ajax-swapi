import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Starships from './components/Starships'
import Header from './components/Header'
import Starship from './components/Starship'
import './App.css';

const  App = () => {
  const [starships, setStarships] = useState([]);

  // const 
  // useEffect Api Call 
  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData.results)
      //turn the values from jsonData object into trackable state using setStarships
      if (jsonData.results){
        setStarships(jsonData.results);

      }
      
    })
  },[])

  // mapping of the api call in a let statement?
  // let ships = starships.map((starship, i ) => {
  //   return (
  //     <Starships key={"starship" + i } starship={starship} />
  //   )
  // } )
  return (
    <Router>
      <Header />
      <div className="App">
      <Route exact path="/" render={()=><Starships starships={starships} />} />
      <Route path="/:id" render={(props)=> {
        let starship = starships.find(({ name }) =>
        name.toString() === props.match.params.id)
        props={...starship, ...props}
        return <Starship {...props} />
      }}/>

      </div>
    </Router>
    
  
    
  );
}

export default App;


/*
 <div className="App">
      <Router>
      
      <main>
      <h1>Star Wars Starships</h1>

        // Routes
        <Route exact path="/" render={()=> {<Starships />}} />
        <StarshipPage />

      </main>

    </Router>
    </div>
*/