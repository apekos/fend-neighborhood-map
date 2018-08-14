import React, { Component } from 'react';

class ListLocations extends Component {
		

	render() {
		const { show } = this.props

		if (show) {
			return (
				<div className="nav">
					Locations
				</div>
			);
		} else return null;
	}
}

export default ListLocations;