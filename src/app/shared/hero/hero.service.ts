import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { MOCK_HEROES } from './mock-hero'

@Injectable()
export class HeroService {

  constructor() {
  }

  public getHeroes(): Promise<Hero[]>{
    return Promise.resolve(MOCK_HEROES);
  }
}
