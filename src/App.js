import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Starships from './containers/Starships';
import StarshipDetails from './containers/StarshipDetails';
// import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<header>
					<Header />
				</header>
				<main>
					<Switch>
						<Route exact path='/' render={() => <Starships />} />
						<Route
							path='/starshipdetails'
							render={props => <StarshipDetails {...props} />}
						/>
					</Switch>
					{/* <Content /> */}
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</Router>
	);
}

export default App;
