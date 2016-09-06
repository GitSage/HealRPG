import { Injectable } from '@angular/core';
import { Spell } from './spell';
import { MOCK_SPELLS } from './mock-spell';

@Injectable()
export class SpellService {

  private spells:Spell[];
  private selectedSpell:Spell;

  constructor() {
  }

  private setSpells(spells:Spell[]):void{
    this.spells = spells;
  }
  
  public getSpells():Promise<Spell[]>{
    this.setSpells(MOCK_SPELLS);
    return Promise.resolve(MOCK_SPELLS);
  }

  public processSpellClicked(clickedSpell:Spell) : void {
    console.info("spellService.processSpellClicked");
    this.selectedSpell = clickedSpell;
    for(var spell of this.spells){
      spell.active = spell === clickedSpell;
    }
  }
}
