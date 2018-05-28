import React, { Component } from 'react'

class GoogleMap extends Component {

  componentDidMount() {
    // this function takes the renderable element, in this case the html node referred to as map (created below)
    // and embeds a map into it with the following configuration
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }

  // make a div, with ref map, i.e. in pure html part of this app this div can be referred to as map
  render() {
    // this.refs.map
    return (
      <div ref="map" />
    );
  }
}

export default GoogleMap
