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
import { GameHeroPanelComponent } from './game-hero-panel.component';

describe('Component: GameHeroPanel', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GameHeroPanelComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GameHeroPanelComponent],
      (component: GameHeroPanelComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GameHeroPanelComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GameHeroPanelComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-game-hero-panel></app-game-hero-panel>
  `,
  directives: [GameHeroPanelComponent]
})
class GameHeroPanelComponentTestController {
}

