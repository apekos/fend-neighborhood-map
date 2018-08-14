import React, { Component } from 'react';
import Header from './components/Header.js';
import ListLocations from './components/ListLocations.js';
import Map from './components/Map.js';
import './App.css';

class App extends Component {
	state = {
		showList: true
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
					<ListLocations show={this.state.showList}/>
					<Map />
				</div>
			</div>
		);
	}
}

export default App;
