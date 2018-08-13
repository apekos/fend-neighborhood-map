import React, { Component } from 'react';
import Header from './components/Header.js';
import ListLocations from './components/ListLocations.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<ListLocations />
				<Map />
			</div>
		);
	}
}

export default App;
