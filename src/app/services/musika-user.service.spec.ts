import { TestBed } from '@angular/core/testing';

import { MusikaUserService } from './musika-user.service';

describe('MusikaUserService', () => {
  let service: MusikaUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusikaUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
