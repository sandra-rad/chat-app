import { LatLng } from 'leaflet';
export class Message {
  user: string;
  message: string;
  date: Date;
  parentId: LatLng;

  constructor(user: string, message: string, parentId: LatLng) {
    this.user = user;
    this.message = message;
    this.date = new Date();
    this.parentId = parentId;
  }
}
