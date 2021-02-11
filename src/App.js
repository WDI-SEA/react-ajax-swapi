import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Starships from './Starships';
import StarshipPage from './StarshipPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Star Wars Api</h2>
          <nav>
            <Link className="App-link" to="/starships">Starships</Link>
          </nav>
        </header>
        <main>
          <Route path="/starships" component={Starships} />
          <Route path="/starship" component={StarshipPage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
