import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-hero'

@Injectable()
export class HeroService {

  heroes:Hero[];

  constructor() {
    this.heroes = HEROES;
  }

  public getHeroes(){
    return this.heroes;
  }
}
