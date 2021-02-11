import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DisplayShip from './components/DisplayShip';
import Header from './components/partials/Header';
import ShipInfo from './components/ShipInfo';

function App() {



  return (
    <Router>
      <Header />
      <main className="App">
        <Switch>
          <Route exact path="/" component={DisplayShip} />
          <Route path="/ship/data" render={({ location }) => <ShipInfo location={location} />} />

        </Switch>
      </main>

    </Router>
  );
}

export default App;
