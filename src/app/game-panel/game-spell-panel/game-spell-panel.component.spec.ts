import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GameSpellPanelComponent } from './game-spell-panel.component';

describe('Component: GameSpellPanel', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GameSpellPanelComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GameSpellPanelComponent],
      (component: GameSpellPanelComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GameSpellPanelComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GameSpellPanelComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-game-spell-panel></app-game-spell-panel>
  `,
  directives: [GameSpellPanelComponent]
})
class GameSpellPanelComponentTestController {
}

