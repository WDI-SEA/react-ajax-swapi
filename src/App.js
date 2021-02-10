import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import StarshipPage from './StarshipPage';
import StarshipDetails from './StarshipDetails';

function App() {

  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships`)
      .then(response => response.json())
      .then(jsonData => {
        //get the value of the returned jsonData
        setShips(Object.values(jsonData))
        console.log(jsonData)
      });
  }, []);



  return (
    <Router>
      <div className="App">
        <div className="title">
          <h1>Star Wars Starships</h1>
        </div>
      <Switch>
          <Route exact path="/" render={() => <StarshipPage ships={ships[3]} />} />
          <Route
            path="/:id"
            Component={StarshipDetails}
          />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
