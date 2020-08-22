import { Component } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-app';

  options = {
    layers: [
      tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png')
    ],
    zoom: 5,
    center: latLng([46.7712, 23.6236 ])
  };
}
