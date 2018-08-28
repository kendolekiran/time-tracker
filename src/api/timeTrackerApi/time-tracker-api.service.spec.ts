import { TestBed, inject } from '@angular/core/testing';

import { TimeTrackerApiService } from './time-tracker-api.service';

describe('TimeTrackerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeTrackerApiService]
    });
  });

  it('should be created', inject([TimeTrackerApiService], (service: TimeTrackerApiService) => {
    expect(service).toBeTruthy();
  }));
});
