import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class ListLocations extends Component {
	state = {
		query: '',
	}

	updateQuery = (query) => {
    this.setState({ query: query })
    
  }

  filterList = (query) => {
  	if (query) {
  		const match = new RegExp(escapeRegExp(query), 'i')
  		this.setState({ showingLocations: this.props.locations.filter((location) => match.test(location.name)) })
  	} else {
  		this.setState({ showingLocations: this.props.locations })
  	}
  }

	render() {
		const { query } = this.state
		const { show } = this.props

		let showingLocations;
		if (query) {
  		const match = new RegExp(escapeRegExp(query), 'i')
  		showingLocations = this.props.locations.filter((location) => match.test(location.name))
  	} else {
  		showingLocations = this.props.locations
  	}

		if (show) {
			return (
				<div className="sidebar">
					<div className="filter">
						<input
							type="text"
							placeholder='Search List'
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
					<div>
						<ul className="filter-results">
							{showingLocations.map(location => {
								return(
									<li key={location.id}>
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