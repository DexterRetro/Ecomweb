import { TestBed } from '@angular/core/testing';

import { MusikaItemService } from './musika-item.service';

describe('MusikaItemService', () => {
  let service: MusikaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusikaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
