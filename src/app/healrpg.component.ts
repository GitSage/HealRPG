import { Component } from '@angular/core';
import { GamePanelComponent } from './game-panel/game-panel';

@Component({
  moduleId: module.id,
  selector: 'healrpg-app',
  templateUrl: 'healrpg.component.html',
  styleUrls: ['healrpg.component.css'],
  directives: [GamePanelComponent],
})
export class HealrpgAppComponent {
  title = 'healrpg works!';
}
