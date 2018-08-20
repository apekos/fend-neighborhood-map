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
		visitsCount: []
		// animation: null
	}
	

	getDataFromFoursquare = (location) => {
		let address = 'https://api.foursquare.com/v2/venues'
		let clientId = 'A1LXA5BZUGLC0DVXIYUO54GIX2ZKVBDL5TGTNJOGKA11JASY'
		let clientSecret = 'ZPCPNYOQ01ZMGHURSY15TUFYBMX04DP0NQCO5QJFT1K3ER2P'
		
		fetch(`${address}/${location.venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180812`)
    .then(response => {
      // Code for handling API response
      if (!response.ok) {
      	//alert(`Error while retrieving data from FourSquare API.`)
    	  throw Error(`Failed retrieving data from FourSquare API.`);
    	} else return response.json()
    })
    .then(data => {
    	console.log(data.response.venue.name)
    	console.log(data.response.venue.rating)
    	this.setState({ locationNames: data.response.venue.name })
    	//this.setState({ visitsCount: data.response.venue.stats.visitsCount })   
    })
    .catch(function(error) {
      // Code for handling errors
      alert('Error while retrieving data from FourSquare API.')
      console.log(error)
    });
	}


	// componentDidMount() {
	// 	let address = 'https://api.foursquare.com/v2/venues'
	// 	let clientId = 'A1LXA5BZUGLC0DVXIYUO54GIX2ZKVBDL5TGTNJOGKA11JASY'
	// 	let clientSecret = 'ZPCPNYOQ01ZMGHURSY15TUFYBMX04DP0NQCO5QJFT1K3ER2P'
		
	// 	locations.map(location => {
	// 		fetch(`${address}/${location.venueId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180812`)
	//     .then(function(response) {
	//       // Code for handling API response
	//       if (!response.ok) {
	//       	//alert(`Error while retrieving data from FourSquare API.`)
 //      	  //throw Error(`Error while retrieving data from FourSquare API.`);
 //      	} else return response.json()
	//     })
	//     .then(function(data) {
	//     	//this.setState({ locationNames: data.response.venue.name })
	//     	this.setState({ visitsCount: data.response.venue.stats.visitsCount })   
	//     })
	//     .catch(function(error) {
	//       // Code for handling errors
	//       alert(`Error while retrieving data from FourSquare API. ${error}`)
	//       console.log('Error while retrieving data from FourSquare API.', error)
	//     });
	// 	})
	// }

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
		this.getDataFromFoursquare(location);
	}

	clickLocation = (location) => {
		this.setState({ isLocationClicked: true })
		this.setState({ locationClicked: location.id })
		this.getDataFromFoursquare(location);
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
						locationNames={this.state.locationNames}
						visitsCount={this.state.visitsCount}
					/>
					<Map 
						locations={this.state.showingLocations}
						toggleInfo = {this.clickMarker}
						closeInfowindow={this.closeInfowindow}
						isMarkerClicked = {this.state.isMarkerClicked}
						isLocationClicked={this.state.isLocationClicked}
						locationClicked={this.state.locationClicked}
						locationNames={this.state.locationNames}
						visitsCount={this.state.visitsCount}
					/>
				</div>
			</div>
		);
	}
}

export default App;
