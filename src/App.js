import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react' 

import logo from './logo.svg';
import './App.css';
import Starships from './subpages/Starships'
import Starship from './subpages/Starship'

function App() {

  const [ships, setShips] = useState([])
    
    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(jsonData => {
            setShips(Object.values(jsonData))
        }).catch(err => {
            console.log('api err?????', err)
        })
    }, []) //runs everything else rendered
  
  console.log(ships[3])

  return (
    <Router>
        <div className="App">
          <div className="header">
            <h1>STAR WARS STARSHIPS</h1>
          </div>
      <Switch>
          <Route exact path="/" render={() => <Starships ships={ships[3]}/>} />
          <Route 
            path="/:id"
            component={Starship} />
      </Switch>
        </div>
    </Router>
  );
}

export default App;
