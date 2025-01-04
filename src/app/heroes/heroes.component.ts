import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {Hero} from './heroes.types';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  imports: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes$: WritableSignal<Hero[]> = signal([]);
  selectedHero$: WritableSignal<Hero | null> = signal(null);

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes$.set(heroes));
  }


  onSelect(hero: Hero): void {
    this.selectedHero$.set(hero);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }
}
