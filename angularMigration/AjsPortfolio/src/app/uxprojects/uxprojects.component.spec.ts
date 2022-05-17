import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UXProjectsComponent } from './uxprojects.component';

describe('UXProjectsComponent', () => {
  let component: UXProjectsComponent;
  let fixture: ComponentFixture<UXProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UXProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UXProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
