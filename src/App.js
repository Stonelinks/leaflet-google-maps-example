/*global google*/
import React, { Component } from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import L from 'leaflet';

import './App.css';
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
        <GitHubForkRibbon href="https://github.com/Stonelinks/leaflet-google-maps-experiment"
                    target="_blank"
                    position="right">
          Fork me on GitHub
        </GitHubForkRibbon>
        <div className="App-header">
          <h2>Leaflet Google Maps Experiment</h2>
          <p className="App-intro">
          Example of google maps hosted inside of a leaflet map
          </p>
        </div>
        <div className="App-map" ref={(el) => this.mapEl = el}></div>
      </div>
    );
  }
}

export default App;
