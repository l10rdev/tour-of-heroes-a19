import {Component, signal, WritableSignal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from './heroes.types';
import {HEROES} from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  heroes$: WritableSignal<Hero[]> = signal(HEROES);

  selectedHero$: WritableSignal<Hero | null> = signal(null);

  onSelect(hero: Hero): void {
    this.selectedHero$.set(hero);
  }
}
