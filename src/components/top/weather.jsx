import React from "react";
import SunImg from "../../resources/images/sun.png";


export default class Weather extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { location, temperature, weather_descriptions, weather_icons } = this.props;
        return (<div className="weather-container">
            <div className="header">{location}</div>
            <div className="inner-container">
                <div className="image"> <img src={weather_icons}></img></div>
                <div className="current-weather">{temperature}°</div>
            </div>
            <div className="footer">{weather_descriptions}</div>
        </div>);

    }
}
