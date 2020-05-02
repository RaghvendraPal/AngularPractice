import { TestBed } from '@angular/core/testing';

import { RidedetailService } from './ridedetail.service';

describe('RidedetailService', () => {
  let service: RidedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
