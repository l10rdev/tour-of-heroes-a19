import {Component, computed, signal, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {debounceTime, distinctUntilChanged, Observable, pipe, Subject, switchMap, tap, timer} from 'rxjs';
import {Hero} from '../heroes/heroes.types';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-search',
  imports: [
    RouterLink
  ],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.scss'
})
export class HeroSearchComponent {
  heroes$: WritableSignal<Hero[]> = signal([]);
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
      tap((heroes) => this.heroes$.set(heroes))
    ).subscribe();
  }
}
