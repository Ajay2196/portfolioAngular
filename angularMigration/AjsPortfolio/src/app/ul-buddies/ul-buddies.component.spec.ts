import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlBuddiesComponent } from './ul-buddies.component';

describe('UlBuddiesComponent', () => {
  let component: UlBuddiesComponent;
  let fixture: ComponentFixture<UlBuddiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlBuddiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlBuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
