import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {MessagesComponent} from './messages/messages.component';

@Component({
  selector: 'app-root',
  imports: [HeroesComponent, MessagesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
