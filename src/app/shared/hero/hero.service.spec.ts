import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('HeroService Service', () => {
  beforeEachProviders(() => [HeroService]);

  it('should ...',
      inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
