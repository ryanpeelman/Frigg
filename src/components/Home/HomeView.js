import React from 'react';
import moment from 'moment';

import HeartRateContainerComponent from '../Visualizations/HeartRate/HeartRateContainerComponent';

export default class HomeView extends React.Component {
    render() {
        var day1 = moment().startOf('day').add(-4, 'days');
        var day2 = moment().startOf('day').add(-3, 'days');
        var day3 = moment().startOf('day').add(-2, 'days');
        var day4 = moment().startOf('day').add(-1, 'days');
        var day5 = moment().startOf('day').add(0, 'days');
        var eventData = [
            { heartrate: 75, datetime: day1.toDate() }, 
            { heartrate: 77, datetime: day2.toDate() }, 
            { heartrate: 85, datetime: day3.toDate() }, 
            { heartrate: 80, datetime: day4.toDate() }, 
            { heartrate: 78, datetime: day5.toDate() }
        ];

        return (
            <div className="HomeView">            
                <div className="card">
                    <HeartRateContainerComponent eventData={eventData} />
                </div>
                <div className="card">
                    This is Card Two
                </div>
                <div className="card">
                    This is Card Three
                </div>
            </div>
        );
    }
}
