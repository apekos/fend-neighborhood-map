import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class MyMarkers extends Component {

	render() {
		const { id, position, isMarkerClicked, isLocationClicked, toggleInfo, locationNames, rating, closeInfowindow, locationClicked, markerLocation} = this.props;
		let infoWindow;

		if (((isMarkerClicked === true) || (isLocationClicked === true)) && (id === locationClicked)){
			// animation = 1;
			infoWindow = (
				<InfoWindow
					position={position}
					onCloseClick={() => closeInfowindow()}
				>
					<p>{locationNames[id]}</p>
					<p>{rating[id]}</p>
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