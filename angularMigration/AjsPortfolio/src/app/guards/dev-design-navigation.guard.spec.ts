import { TestBed } from '@angular/core/testing';

import { DevDesignNavigationGuard } from './dev-design-navigation.guard';

describe('DevDesignNavigationGuard', () => {
  let guard: DevDesignNavigationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DevDesignNavigationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
