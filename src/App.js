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
		showingLocations: locations,
		isClicked: false,
		locationClicked: null,
		// animation: null
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

	toggleInfowindow = (location) => {
		this.setState(prevState => ({
			isClicked: !prevState.isClicked
		}));
		this.setState({ locationClicked: location.id })
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
						toggleLocation={this.toggleInfowindow}
					/>
					<Map 
						locations={this.state.showingLocations}
						toggleInfo = {this.toggleInfowindow}
						isClicked = {this.state.isClicked}
						locationClicked={this.state.locationClicked}
						// animation = {this.state.animation}
					/>
				</div>
			</div>
		);
	}
}

export default App;
