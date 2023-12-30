'use client';

import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css';


export default function Map() {

  function _handleClick() {
    console.log("Clicked Button")
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

    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(map);

  }

  return (
    <div>
      <div id="map" className='h-[180px] border border-red m-[20px]'>
      </div>
      <button onClick={_handleClick}> Click me </button>
    </div>
  )
}