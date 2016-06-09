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
import { SpellConfiguratorComponent } from './spell-configurator.component';

describe('Component: SpellConfigurator', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SpellConfiguratorComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SpellConfiguratorComponent],
      (component: SpellConfiguratorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SpellConfiguratorComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SpellConfiguratorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-spell-configurator></app-spell-configurator>
  `,
  directives: [SpellConfiguratorComponent]
})
class SpellConfiguratorComponentTestController {
}

