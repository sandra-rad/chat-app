import { Component, OnInit, NgZone } from '@angular/core';
import {
  tileLayer,
  latLng,
  LeafletMouseEvent,
  marker,
  Layer,
  Marker,
  LeafletEvent,
  icon,
} from 'leaflet';

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

  layers: Layer[] = [];

  activeMarker: Marker;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {}

  onLeafletClick(event: LeafletMouseEvent) {
    const newMarker = marker(event.latlng, {
      title: 'Chatroom ' + (this.layers.length + 1),
    })
      .setIcon(
        icon({
          iconUrl: 'assets/marker-icon.png',
        })
      )
      .on('click', (eventLeaflet: LeafletEvent) => {
        this.zone.run(() => {
          this.activeMarker = eventLeaflet.target as Marker;
        });
      });
    this.activeMarker = newMarker;
    this.layers.push(newMarker);
  }
}
