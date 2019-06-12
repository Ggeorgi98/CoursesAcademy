import { TestBed, async, inject } from '@angular/core/testing';

import { Authenticated.Course.GuardGuard } from './authenticated.course.guard.guard';

describe('Authenticated.Course.GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Authenticated.Course.GuardGuard]
    });
  });

  it('should ...', inject([Authenticated.Course.GuardGuard], (guard: Authenticated.Course.GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
