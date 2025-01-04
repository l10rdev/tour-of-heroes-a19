import {Component, computed, OnInit, signal, WritableSignal} from '@angular/core';
import {Hero} from '../heroes/heroes.types';
import {HeroService} from '../hero.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  heroes$: WritableSignal<Hero[]> = signal([]);
  topHeroes$ = computed(() => {
    return this.heroes$().toSpliced(4)
  });

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    const a = [];
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => this.heroes$.set(heroes));
  }
}
