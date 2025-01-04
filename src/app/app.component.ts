import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  imports: [HeroesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';
}
