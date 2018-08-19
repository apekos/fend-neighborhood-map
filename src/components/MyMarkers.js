import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class MyMarkers extends Component {
	// state = {
	// 	isOpen: false
	// }

	// toggleInfo = () => {
	// 	this.setState(prevState => ({
	// 		isOpen: !prevState.isOpen
	// 	}));
	// }

	render() {
		const { id, position, isClicked, toggleInfo, locationClicked, markerLocation} = this.props;
		let infoWindow;
		let animation;

		if ((isClicked === true) && (id === locationClicked)){
			animation = 1;
			infoWindow = (
				<InfoWindow
					position={position}
					onCloseClick={() => toggleInfo(markerLocation)}
				>
					<p>this is an infoWindow</p>
				</InfoWindow>
			);
		}

		

		return(
			<Marker
				key={id}
				position={position}
				animation = {animation}
				onClick={() => toggleInfo(markerLocation)}
			>
				{infoWindow}
			</Marker>
		)
	}
}

export default MyMarkers;