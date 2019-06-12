import { TestBed, async, inject } from '@angular/core/testing';

import { Authenticated.UsersGuard } from './authenticated.users.guard';

describe('Authenticated.UsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Authenticated.UsersGuard]
    });
  });

  it('should ...', inject([Authenticated.UsersGuard], (guard: Authenticated.UsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
