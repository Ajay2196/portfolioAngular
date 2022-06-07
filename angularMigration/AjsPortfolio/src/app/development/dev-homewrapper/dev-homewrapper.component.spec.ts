import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevHomewrapperComponent } from './dev-homewrapper.component';

describe('DevHomewrapperComponent', () => {
  let component: DevHomewrapperComponent;
  let fixture: ComponentFixture<DevHomewrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevHomewrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevHomewrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
