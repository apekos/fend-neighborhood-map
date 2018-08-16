import React, { Component } from 'react';
import * as locations from './locations.json';
import Header from './components/Header.js';
import ListLocations from './components/ListLocations.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {
	state = {
		showList: true,
		locations: locations
	}

	clickMenuBtn = () => {
		this.setState(prevState => ({
			showList: !prevState.showList
		}));
	}

	render() {
		return (
			<div className="App">
				<Header clickMenuBtn={this.clickMenuBtn} />
				<div className="main">
					<ListLocations 
					locations={this.state.locations}
					show={this.state.showList}
					/>
					<Map />
				</div>
			</div>
		);
	}
}

export default App;
