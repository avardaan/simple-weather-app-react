import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  // this function takes one object out of the weather array, and renders it appropriately
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const pressure = cityData.list.map(weather => weather.main.pressure)

    // render table row
    return (
      <tr key={name}>
        <td> {name} </td>
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
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
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
