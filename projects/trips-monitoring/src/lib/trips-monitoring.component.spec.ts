import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsMonitoringComponent } from './trips-monitoring.component';

describe('TripsMonitoringComponent', () => {
  let component: TripsMonitoringComponent;
  let fixture: ComponentFixture<TripsMonitoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsMonitoringComponent]
    });
    fixture = TestBed.createComponent(TripsMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
