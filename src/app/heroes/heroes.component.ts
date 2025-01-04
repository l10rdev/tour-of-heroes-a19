import {Component, signal, WritableSignal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from './heroes.types';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  hero: WritableSignal<Hero> = signal({
    id: 1,
    name: 'Windstorm',
  })
}
