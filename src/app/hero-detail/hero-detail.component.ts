import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {Hero} from '../heroes/heroes.types';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe, Location} from '@angular/common';
import {ActivatedRoute, } from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  hero$: WritableSignal<Hero | null> = signal(null);

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }


  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero$.set(hero));
  }


  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero$()) {
      this.heroService.updateHero(this.hero$()!).subscribe(() => this.goBack());
    }
  }
}
