import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationCrisisComponent } from './accomodation-crisis.component';

describe('AccomodationCrisisComponent', () => {
  let component: AccomodationCrisisComponent;
  let fixture: ComponentFixture<AccomodationCrisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationCrisisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationCrisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
