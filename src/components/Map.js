import React, { Component } from 'react';
import { compose, withProps } from 'recompose'
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {


	render() {
		const GoogleMapExample = compose(
			withProps({
				googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDQsjBJv4iEpQ5rv6WsvD81pUKg2OqPwuM",
				loadingElement: <div style={{ height: `100%` }} />,
				containerElement: <div style={{ height: `100%` }} />,
				mapElement: <div style={{ height: `100%` }} />,
			}),
			withScriptjs,
			withGoogleMap
		)((props) =>
			<GoogleMap
				defaultZoom={13}
				defaultCenter={{ lat: 37.9838096, lng: 23.7275388 }}
			>
			</GoogleMap>
		);

		return (
			<div className='map'>
				<GoogleMapExample />
			</div>
		);
	}
}

export default Map;