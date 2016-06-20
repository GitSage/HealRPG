import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { SPELLS } from './mock-spell';

@Injectable()
export class SpellService {

  private spells:Spell[];

  constructor() {
    this.spells = this.getSpells();
  }

  public getSpells(){
    return this.spells;
  }



}
