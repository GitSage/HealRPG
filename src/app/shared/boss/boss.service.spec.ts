import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BossServiceService } from './boss.service';

describe('BossService Service', () => {
  beforeEachProviders(() => [BossServiceService]);

  it('should ...',
      inject([BossServiceService], (service: BossServiceService) => {
    expect(service).toBeTruthy();
  }));
});
