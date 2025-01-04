import {Component, input} from '@angular/core';
import {Hero} from '../heroes/heroes.types';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {
  hero$ = input.required<Hero | null>();
}
