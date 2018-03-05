import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import {Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero:Hero = {
	  id:1,
	  name :'Windstrom'
  };
  
  heroes:[];
  
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
	  this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
	  this.selectedHero = hero;
  }
 
  getHeroes(): void {
	 // this.heroes = HEROES;
	 this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
