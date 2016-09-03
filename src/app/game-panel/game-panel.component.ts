import { Component, OnInit } from '@angular/core';
import { GameHeroPanelComponent } from './game-hero-panel'
import { GameSpellPanelComponent } from './game-spell-panel'
// import { BossPanelComponent } from './boss-panel'

@Component({
  moduleId: module.id,
  selector: 'game-panel',
  templateUrl: 'game-panel.component.html',
  styleUrls: ['game-panel.component.css'],
  directives: [GameHeroPanelComponent, GameSpellPanelComponent]
})
export class GamePanelComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
