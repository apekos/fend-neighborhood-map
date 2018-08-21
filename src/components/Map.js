import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {  withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MyMarkers from './MyMarkers.js';

const MyMap = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDQsjBJv4iEpQ5rv6WsvD81pUKg2OqPwuM",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div role="application" tabIndex="0"style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={13}
		defaultCenter={{ lat: 37.9755433, lng: 23.7348515 }}
	>
		{props.locations.map(l => {
			return (
				<MyMarkers
					key={l.id}
					id={l.id}
					markerLocation={l}
					position={{ lat: l.location.lat, lng: l.location.lng }}
					toggleInfo = {props.toggleInfo}
					closeInfowindow={props.closeInfowindow}
					isMarkerClicked = {props.isMarkerClicked}
					isLocationClicked={props.isLocationClicked}
					locationClicked={props.locationClicked}
					locationNames={props.locationNames}
					rating={props.rating}
				/>
			)
		})}
	</GoogleMap>
);

class Map extends Component {

	render() {
		return (
			<div className='map'>
				<MyMap 
					locations={this.props.locations}
					toggleInfo = {this.props.toggleInfo}
					closeInfowindow={this.props.closeInfowindow}
					isMarkerClicked = {this.props.isMarkerClicked}
					isLocationClicked={this.props.isLocationClicked}
					locationClicked={this.props.locationClicked}
					locationNames={this.props.locationNames}
					rating={this.props.rating}
				/>
			</div>
		);
	}
}

export default Map;