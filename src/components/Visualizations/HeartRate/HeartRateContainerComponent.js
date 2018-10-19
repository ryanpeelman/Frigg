import React from 'react';

import HeartRateDisplayComponent from './HeartRateDisplayComponent';

export default class HeartRateContainerComponent extends React.Component {
	render() {
		var sorted = this.props.eventData.sort(function (a, b) {
			return a.datetimeasval - b.datetimeasval;
		});

		const heartRateEventData = sorted.reverse().slice(0, 5).reverse();

		return (
			<div className="HeartRateContainerComponent">
				<div className="header" onClick={this.toggleContent}>
					<div>
						HighCharts Example
					</div>
				</div>
				<div className="chartsContainer">
					<HeartRateDisplayComponent heartRateEventData={heartRateEventData} />
				</div>
			</div>
		);
	}
}