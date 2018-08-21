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
					<div className="infoWindow">
						<h4>{locationNames[id]}</h4>
						<p><strong>Rating: {rating[id] ? rating[id] : '-'}</strong></p>
						<p><i>Data retrieved from Foursquare</i></p>
					</div>
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