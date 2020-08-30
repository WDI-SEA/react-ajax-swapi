import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Starships from './Starship';
import StarPage from './StarPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Starships} />
          
          
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
