import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'),
    ],
    zoom: 5,
    center: latLng([46.7712, 23.6236]),
  };
  constructor() {}

  ngOnInit(): void {}
}
