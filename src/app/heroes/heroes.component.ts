import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {Hero} from './heroes.types';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes$: WritableSignal<Hero[]> = signal([]);

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes$.set(heroes));
  }
}
