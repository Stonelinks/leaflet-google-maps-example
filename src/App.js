/*global google*/
import React, { Component } from 'react';
import './App.css';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

import './leaflet-google'

class App extends Component {

  componentDidMount() {
    var mymap = L.map(this.mapEl).setView([51.505, -0.09], 13);

    L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.0.1/dist/images/";

    var googleLayer = new L.Google('SATELLITE');
    mymap.addLayer(googleLayer);

    L.marker([51.5, -0.09]).addTo(mymap);

    L.circle([51.508, -0.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
    }).addTo(mymap);

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(mymap);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Leaflet Google Maps Experiment</h2>
          <p className="App-intro">
          How hard is it to host google maps inside of leaflet?
          </p>
        </div>
        <div className="App-map" ref={(el) => this.mapEl = el}></div>
      </div>
    );
  }
}

export default App;
