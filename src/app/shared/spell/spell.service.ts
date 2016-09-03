import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './mock-spell';

@Injectable()
export class SpellService {

  constructor() {;
  }

  public getSpells() : Promise<Spell[]>{
    return Promise.resolve(SPELLS);
  }
}
