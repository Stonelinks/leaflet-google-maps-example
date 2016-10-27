import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import GoogleMapsLoader from 'google-maps';

// get a key from https://developers.google.com/maps/documentation/javascript/get-api-key
GoogleMapsLoader.KEY = 'AIzaSyAt1Sf4E5ns6wc2HNpX9aT4_LzKfb-E_cA';

GoogleMapsLoader.load(function(google) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});
