import React, { Component } from 'react';
import * as locations from './locations.json';
import Header from './components/Header.js';
import ListLocations from './components/ListLocations.js';
import Map from './components/Map.js';
import './App.css';
import escapeRegExp from 'escape-string-regexp'


class App extends Component {
	state = {
		query: '',
		showList: true,
		locations: locations,
		showingLocations: locations
	}

	updateQuery = (query) => {
    this.setState({ query: query })
    this.filterList(query)
  }

  filterList = (query) => {
  	if (query) {
  		const match = new RegExp(escapeRegExp(query), 'i')
  		this.setState({ showingLocations: this.state.locations.filter((location) => match.test(location.name)) })
  	} else {
  		this.setState({ showingLocations: this.state.locations })
  	}
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
						showingLocations={this.state.showingLocations}
						updateQuery={this.updateQuery}
						show={this.state.showList}
					/>
					<Map 
						locations={this.state.showingLocations}
					/>
				</div>
			</div>
		);
	}
}

export default App;
