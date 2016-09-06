import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { HealthBarComponent } from './health-bar.component';

describe('Component: HealthBar', () => {

  beforeEachProviders(() => [HealthBarComponent]);

  it('should inject the component', inject([HealthBarComponent],
      (component: HealthBarComponent) => {
    expect(component).toBeTruthy();
  }));
});
