import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmwiseComponent } from './farmwise.component';

describe('FarmwiseComponent', () => {
  let component: FarmwiseComponent;
  let fixture: ComponentFixture<FarmwiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmwiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
