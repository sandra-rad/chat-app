import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Marker } from 'leaflet';
import { Message } from './message/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() chatMarker: Marker;
  @ViewChild('myForm', { static: false }) myForm: NgForm;

  messages: Message[] = [];

  usernameValue: string;
  messageValue: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.myForm.valid) {
      this.messages.push(
        new Message(
          this.usernameValue,
          this.messageValue,
          this.chatMarker.getLatLng()
        )
      );
      this.myForm.resetForm();
    }
  }

  messageArray() {
    return this.messages.filter((mess) => {
      return mess.parentId === this.chatMarker.getLatLng();
    });
  }
}
