import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
// import Markers from './components/Markers.js';

// const MyMap = withScriptjs(withGoogleMap((props) => (
		 
// 	<GoogleMap
// 		defaultZoom={13}
// 		defaultCenter={{ lat: 37.9838096, lng: 23.7275388 }}
// 	>
// 		{props.locations.map(l => {
// 			return (
// 				<Marker
// 					key={l.id}
// 					position={{ lat: l.location.lat, lng: l.location.lng }}
// 				/>
// 			)
// 		})}
// 	</GoogleMap>
// )));

// class Map extends Component {

// 	render() {		
// 		return (
// 			<div className='map'>
// 				<MyMap 
// 					googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDQsjBJv4iEpQ5rv6WsvD81pUKg2OqPwuM"
// 					loadingElement={<div style={{ height: `100%` }} />}
// 					containerElement={<div style={{ height: `100%` }} />}
// 					mapElement={<div style={{ height: `100%` }} />}
// 					locations={this.props.locations}
// 				/>
// 			</div>
// 		);
// 	}
// }

// export default Map;


const MyMap = compose(
			withProps({
				googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDQsjBJv4iEpQ5rv6WsvD81pUKg2OqPwuM",
				loadingElement: <div style={{ height: `100%` }} />,
				containerElement: <div style={{ height: `100%` }} />,
				mapElement: <div style={{ height: `100%` }} />,
				//locations: this.props.locations,
			}),
			withScriptjs,
			withGoogleMap
		)((props) =>
			<GoogleMap
				defaultZoom={13}
				defaultCenter={{ lat: 37.9838096, lng: 23.7275388 }}
			>
				{props.locations.map(l => {
					return (
						<Marker
							key={l.id}
							position={{ lat: l.location.lat, lng: l.location.lng }}
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
				/>
			</div>
		);
	}
}

export default Map;