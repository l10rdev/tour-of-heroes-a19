import {Component, signal, WritableSignal} from '@angular/core';
import {Hero} from './heroes.types';
import {HEROES} from '../data/mock-heroes';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  imports: [HeroDetailComponent],
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
