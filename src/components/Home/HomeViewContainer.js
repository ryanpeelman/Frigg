import React from 'react';

import ExploreView from '../Explore/ExploreView';
import HomeView from './HomeView';
import NavigationComponent from '../Navigation/NavigationComponent';

export default class HomeViewContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedPage: "Home"
		}

		this.handleSelectedPageChange = this.handleSelectedPageChange.bind(this);
	}

	handleSelectedPageChange(page) {
		this.setState({ selectedPage: page.name });
	}

	render() {
		return (
			<div className="HomeViewContainer">
				<NavigationComponent handleSelectedPageChange={this.handleSelectedPageChange} />
				{(this.state.selectedPage === "Home") && <HomeView />}
				{(this.state.selectedPage === "Explore") && <ExploreView />}
			</div>
		);
	}
}