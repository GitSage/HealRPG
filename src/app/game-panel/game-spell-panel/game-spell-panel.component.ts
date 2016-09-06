import { Component, OnInit } from '@angular/core';
import { SpellService } from '../../shared/spell/spell.service';
import { Spell } from '../../shared/spell/spell';
import { SpellBoxComponent } from './spell-box/spell-box.component';

@Component({
  moduleId: module.id,
  selector: 'game-spell-panel',
  templateUrl: 'game-spell-panel.component.html',
  styleUrls: ['game-spell-panel.component.css'],
  providers: [ SpellService ],
  directives: [ SpellBoxComponent ]
})
export class GameSpellPanelComponent implements OnInit {

  private spells : Spell[];

  constructor(private spellService : SpellService) {}

  ngOnInit(){
    this.spellService.getSpells().then(spells => this.spells = spells);
  }

  private spellClicked(clickedSpell) : void{
    console.info("game-spell-panel received spellClicked event" );
    this.spellService.processSpellClicked(clickedSpell);
  }

}
