import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {

  // this function takes one object out of the weather array, and renders it appropriately
  renderWeather(cityData) {
    const name = cityData.city.name
    // initialize list and extract temps from weather object
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    // render table row
    return (
      <tr key={name}>
        <td> {name} </td>
        <td> <Chart data={temps} color="blue" units="K" /> </td>
        <td> <Chart data={pressures} color="red" units="hPa" /> </td>
        <td> <Chart data={humidities} color="yellow" units="%" /> </td>
      </tr>
    )
  }

  render() {
    // props.weather is the array with multiple objects each of which is the result of an ajax request to
    // the weather API, the array keeps getting bigger as more searches are made
    // so we map over it, and render stuff for each object
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (K) </th>
            <th> Pressure (hPa) </th>
            <th> Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList)
