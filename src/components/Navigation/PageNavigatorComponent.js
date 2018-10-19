import React from 'react';

export default class PageNavigatorComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedPageName: "Home"
		}
	}

	navigate(page) {
		this.setState({selectedPageName: page.name});

		if(this.props.handleSelectedPageChange) {
			this.props.handleSelectedPageChange(page);
		}
	}

	render() {
		const pages = [
			{ name: "Home" }, 
			{ name: "Profile" }, 
			{ name: "Interact" }, 
			{ name: "Explore" }
		];

		const pageNavigatorItems = pages.map((page, index) =>
			<PageNavigatorItem key={`item-${index}`} page={page} isSelected={(page.name === this.state.selectedPageName)} navigate={p => this.navigate(p)} />
		);

		return (
			<div className="PageNavigatorComponent">
				{pageNavigatorItems}
			</div>
		);
	}
}

class PageNavigatorItem extends React.Component {
	render() {
		const page = this.props.page;
		const isSelected = this.props.isSelected;

		const navClassName = "page" + (isSelected ? " selected" : "");

		return (
			<div className={navClassName} onClick={() => this.props.navigate(page)}>
				<div>
					{page.name}
				</div>
			</div>
		);
	}
}