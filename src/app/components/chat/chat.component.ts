import { Component, OnInit, Input } from '@angular/core';
import { Marker } from 'leaflet';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() activeMarker: Marker;
  constructor() {}

  ngOnInit(): void {}
}
