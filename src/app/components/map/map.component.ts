import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  tileLayer,
  latLng,
  LeafletMouseEvent,
  Map,
  circle,
  polygon,
  marker,
  Layer,
} from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild('mapHtml') map: ElementRef<Map>;

  options = {
    layers: [
      tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png'),
    ],
    zoom: 5,
    center: latLng([46.7712, 23.6236]),
  };
  layers: Layer[] = [marker([46.7712, 23.6236])];

  ngOnInit(): void {}

  onLeafletClick(event: LeafletMouseEvent) {
    this.layers.push(marker(event.latlng));
  }
}
