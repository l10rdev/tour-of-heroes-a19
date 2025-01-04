import {Component, Signal, signal} from '@angular/core';
import {MessageService} from '../message.service';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-messages',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {
  }

}
