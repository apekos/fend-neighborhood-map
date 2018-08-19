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
		isMarkerClicked: false,
		isLocationClicked: false,
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

	clickMarker = (location) => {
		this.setState({ isMarkerClicked: true })
		this.setState({ locationClicked: location.id })
	}

	clickLocation = (location) => {
		this.setState({ isLocationClicked: true })
		this.setState({ locationClicked: location.id })
	}

	closeInfowindow = () => {
		this.setState({ isMarkerClicked: false })
		this.setState({ isLocationClicked: false })
	}
	// toggleInfowindow = (location) => {
	// 	this.setState(prevState => ({
	// 		isClicked: !prevState.isClicked
	// 	}));
	// 	this.setState({ locationClicked: location.id })
	// }

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
						toggleLocation={this.clickLocation}
					/>
					<Map 
						locations={this.state.showingLocations}
						toggleInfo = {this.clickMarker}
						closeInfowindow={this.closeInfowindow}
						isMarkerClicked = {this.state.isMarkerClicked}
						isLocationClicked={this.state.isLocationClicked}
						locationClicked={this.state.locationClicked}
						// animation = {this.state.animation}
					/>
				</div>
			</div>
		);
	}
}

export default App;
