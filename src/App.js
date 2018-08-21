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
		locationNames: null,
		rating: null
		// animation: null
	}
	
	// Function for getting data from Foursquare
	getDataFromFoursquare = () => {
		let address = 'https://api.foursquare.com/v2/venues'
		let clientId = 'A1LXA5BZUGLC0DVXIYUO54GIX2ZKVBDL5TGTNJOGKA11JASY'
		let clientSecret = 'ZPCPNYOQ01ZMGHURSY15TUFYBMX04DP0NQCO5QJFT1K3ER2P'
		let names = []
		let ratings = []
		
		locations.map(location => {
			fetch(`${address}/${location.venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180812`)
	    .then(response => {
	      if (!response.ok) {
      	  throw Error('Failed retrieving data from FourSquare API.');
      	} else return response.json()
	    })
	    .then(data => {
	    	names.push(data.response.venue.name)
	    	ratings.push(data.response.venue.rating)   
	    })
	    .catch(error => {
	      alert(error)
	      console.log(error)
	    });
		})
		this.setState({ locationNames: names })
   	this.setState({ rating: ratings })
	}

	// Get the data
	componentDidMount() {
		this.getDataFromFoursquare()
	}

	// 
	updateQuery = (query) => {
    this.setState({ query: query })
    this.filterList(query)
  }

  // Function for filtering the list locations
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

	// When a marker is clicked
	clickMarker = (location) => {
		this.setState({ isMarkerClicked: true })
		this.setState({ locationClicked: location.id })
		//this.getDataFromFoursquare(location);
	}

	// When a location on the list is clicked
	clickLocation = (location) => {
		this.setState({ isLocationClicked: true })
		this.setState({ locationClicked: location.id })
		//this.getDataFromFoursquare(location);
	}

	// When the infowindow is closed
	closeInfowindow = () => {
		this.setState({ isMarkerClicked: false })
		this.setState({ isLocationClicked: false })
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
						toggleLocation={this.clickLocation}
						locationNames={this.state.locationNames}
						rating={this.state.rating}
					/>
					{
						(!navigator.onLine) && 
	            (<div>
	              <h2>Map is offline</h2>
	            </div>)
          }
					<Map 
						locations={this.state.showingLocations}
						toggleInfo = {this.clickMarker}
						closeInfowindow={this.closeInfowindow}
						isMarkerClicked = {this.state.isMarkerClicked}
						isLocationClicked={this.state.isLocationClicked}
						locationClicked={this.state.locationClicked}
						locationNames={this.state.locationNames}
						rating={this.state.rating}
					/>
				</div>
			</div>
		);
	}
}

export default App;
