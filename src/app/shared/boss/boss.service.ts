import { Injectable } from '@angular/core';
import { Boss } from './boss';
import { BOSSES } from './mock-boss';

@Injectable()
export class BossServiceService {

  private bosses:Boss[]

  constructor() {
    this.bosses = BOSSES;
  }

  private getBosses() {
    return this.bosses;
  }


}
