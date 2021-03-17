import {Component, OnInit} from '@angular/core';
import {Hero} from '../data/Hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messagingService: MessageService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagingService.add(`HeroesComponent: Selected hero name = ${hero.name}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
