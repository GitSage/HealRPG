import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { MOCK_SPELLS } from './mock-spell';

@Injectable()
export class SpellService {

  constructor() {
  }

  public getSpells() : Promise<Spell[]>{
    return Promise.resolve(MOCK_SPELLS);
  }
}
