import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './bootstrap/bootstrap.css';
import Header from './components/Header.js';
import About from './pages/About.js';
import Home from './pages/Home.js';
import IntroBackground from './components/IntroBackground';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<IntroBackground />
								<Header />
								<div style={{ height: '30vh' }} />
								<Home />
							</React.Fragment>
						)}
					/>
					<Route
						exact
						path="/about"
						render={(props) => (
							<React.Fragment>
								<Header />
								<About />
							</React.Fragment>
						)}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
