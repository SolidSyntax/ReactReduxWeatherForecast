import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (°C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const cityName = cityData.city.name;

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord; //More destructuring !


        return (
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="orange" units="°C"/>
                </td><td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}

function mapStateToProps({weather}) {//Object destructuring
    return {weather};//short hand property names
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList)