import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeCornerComponent } from './creative-corner.component';

describe('CreativeCornerComponent', () => {
  let component: CreativeCornerComponent;
  let fixture: ComponentFixture<CreativeCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
