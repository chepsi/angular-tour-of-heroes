import {Injectable} from '@angular/core';
import {Hero} from './data/Hero';
import {Heroes} from './data/mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() {
  }

  getHeroes(): Hero[] {
    return Heroes;
  }
}
