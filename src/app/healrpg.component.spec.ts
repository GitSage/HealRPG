import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HealrpgAppComponent } from '../app/healrpg.component';

beforeEachProviders(() => [HealrpgAppComponent]);

describe('App: Healrpg', () => {
  it('should create the app',
      inject([HealrpgAppComponent], (app: HealrpgAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'healrpg works!\'',
      inject([HealrpgAppComponent], (app: HealrpgAppComponent) => {
    expect(app.title).toEqual('healrpg works!');
  }));
});
