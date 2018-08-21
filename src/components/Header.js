import React, {Component} from 'react'

class Header extends Component {

	render() {
		return (
			<header>
				<div className="header-title">
					<h1>Athens Sightseeing</h1>
				</div>
				<div>
					<a title="Open/Close List" tabIndex="0" onClick={this.props.clickMenuBtn} className="menu">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
						</svg>
					</a>
				</div>
			</header>
		);
	}
}

export default Header;