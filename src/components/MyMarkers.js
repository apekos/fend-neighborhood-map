import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class MyMarkers extends Component {

	render() {
		const { id, position, isMarkerClicked, isLocationClicked, toggleInfo, locationNames, rating, closeInfowindow, locationClicked, markerLocation} = this.props;
		let infoWindow;

		if (((isMarkerClicked === true) || (isLocationClicked === true)) && (id === locationClicked)){
			infoWindow = (
				<InfoWindow
					position={position}
					onCloseClick={() => closeInfowindow()}
				>
					<h3>{locationNames[id]}</h3>
					<p>Rating: {rating[id] ? rating[id] : '-'}</p>
					<p><strong>Data retrieved from Foursquare</strong></p>
				</InfoWindow>
			);
		}

		

		return(
			<Marker
				key={id}
				position={position}
				animation = {(isLocationClicked && (id === locationClicked)) ? 1 : 0}
				onClick={() => toggleInfo(markerLocation)}
			>
				{infoWindow}
			</Marker>
		)
	}
}

export default MyMarkers;