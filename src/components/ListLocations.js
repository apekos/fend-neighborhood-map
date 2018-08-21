import React, { Component } from 'react';

class ListLocations extends Component {
	
	render() {
		const { query, show, showingLocations, locationNames, rating, toggleLocation } = this.props;

		if (show) {
			return (
				<nav className="sidebar">
					<div className="filter">
						<input
							type="text"
							placeholder='Search List'
							tabIndex='0'
							aria-label='Filter locations'
							value={query}
							onChange={(event) => this.props.updateQuery(event.target.value)}
						/>
					</div>
					<div>
						<ul className="filter-results" role="navigation">
							{showingLocations.map(location => {
								return(
									<li 
										key={location.id}
										tabIndex={show ? '0' : '1'}
										aria-label='Locations'
										onClick={() => {toggleLocation(location)}}
									>
										{location.name}
									</li>
								)
							})}
						</ul>
					</div>
				</nav>
			);
		} else return null;
	}
}

export default ListLocations;