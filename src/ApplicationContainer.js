import React from 'react';

import HomeViewContainer from './components/Home/HomeViewContainer';

export default class ApplicationContainer extends React.Component {
    render() {
        return (
            <div className="ApplicationContainer">
                <HomeViewContainer />
            </div>
        );
    }
}