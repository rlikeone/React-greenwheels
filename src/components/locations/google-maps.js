import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "35%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.long
        }}
      >
        <Marker position={{ lat: this.props.lat, lng: this.props.long }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAuJFJKV3sL94VLYF3JwTYwEAzCe63jwl4"
})(MapContainer);
