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
import { HeroConfiguratorComponent } from './hero-configurator.component';

describe('Component: HeroConfigurator', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [HeroConfiguratorComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([HeroConfiguratorComponent],
      (component: HeroConfiguratorComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(HeroConfiguratorComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(HeroConfiguratorComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-hero-configurator></app-hero-configurator>
  `,
  directives: [HeroConfiguratorComponent]
})
class HeroConfiguratorComponentTestController {
}

