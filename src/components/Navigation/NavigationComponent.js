import React from 'react';

import ApplicationTitleComponent from './ApplicationTitleComponent';
import PageNavigatorComponent from './PageNavigatorComponent';
import WelcomeComponent from './WelcomeComponent';

export default class NavigationComponent extends React.Component {
	render() {
		return (
			<div className="NavigationComponent">
				<div className="NavLeft">
					<ApplicationTitleComponent />
					<PageNavigatorComponent handleSelectedPageChange={this.props.handleSelectedPageChange} />
				</div>
				<div className="NavRight">
					<WelcomeComponent />
				</div>
			</div>
		);
	}
}