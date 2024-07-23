import { TestBed } from '@angular/core/testing';
import { TripsMonitoringService } from './trips-monitoring.service';


describe('TripsMonitoringService', () => {
  let service: TripsMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
