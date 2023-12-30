'use client';

import * as L from 'leaflet'
import * as React from 'react'
import "leaflet/dist/leaflet.css";

interface IProps {

}
interface IState {
  callSign?: string;
  lat?: number;
  long?: number;
  alt?: number;
  heading?: number;
  initializeMap?: boolean;
}


export default class Map extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      initializeMap: false,
    };

  }

  componentDidMount() {
    window.addEventListener("load", (event) => {

      var container = L.DomUtil.get('map');
      if (container != null) {
        container._leaflet_id = null;
      }

      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var marker = L.marker([51.5, -0.09]).addTo(map);

      var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      }).addTo(map);
    });

  }

  initMap() {

  }

  _handleClick() {

  }

  render() {
    return (
      <div>
        <div id="map" className='h-[700px]'></div>
        <button onClick={this._handleClick}>Click me</button>
      </div>
    )
  }
}
