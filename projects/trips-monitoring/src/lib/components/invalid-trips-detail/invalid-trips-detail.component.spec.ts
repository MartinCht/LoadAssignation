import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidTripsDetailComponent } from './invalid-trips-detail.component';

describe('InvalidTripsDetailComponent', () => {
  let component: InvalidTripsDetailComponent;
  let fixture: ComponentFixture<InvalidTripsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidTripsDetailComponent]
    });
    fixture = TestBed.createComponent(InvalidTripsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
