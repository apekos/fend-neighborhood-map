import React, { Component } from 'react';

class ListLocations extends Component {
	
	render() {
		const { query, show, showingLocations, locationNames, rating, toggleLocation } = this.props;

		if (show) {
			return (
				<div className="sidebar">
					<div className="filter">
						<input
							type="text"
							placeholder='Search List'
							value={query}
							onChange={(event) => this.props.updateQuery(event.target.value)}
						/>
					</div>
					<div>
						<ul className="filter-results">
							{showingLocations.map(location => {
								return(
									<li 
										key={location.id}
										onClick={() => {toggleLocation(location)}}
									>
										{location.name}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			);
		} else return null;
	}
}

export default ListLocations;