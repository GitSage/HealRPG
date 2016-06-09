import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SpellService } from './spell.service';

describe('SpellService Service', () => {
  beforeEachProviders(() => [SpellService]);

  it('should ...',
      inject([SpellService], (service: SpellService) => {
    expect(service).toBeTruthy();
  }));
});
