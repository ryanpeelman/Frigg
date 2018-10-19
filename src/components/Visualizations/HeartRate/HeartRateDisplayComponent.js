import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default class HeartRateDisplayComponent extends React.Component {
	render() {

		const heartRateEventData = this.props.heartRateEventData;

		var data = heartRateEventData.map(x => {
			var item = {};
			item.x = x.datetime;
			item.y = x.heartrate;
			return item;
		});

		const options = {
			series: [{
				data: data
			}], 
			title: {
				text: "Heart Rate over Time"
			}, 
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%b %e'
				}
			}, 
			yAxis: {
				title: {
					text: "HR"
				}
			}
		}

		return (
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
		);
	}
}