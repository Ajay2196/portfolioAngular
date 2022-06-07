import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignHomeWrapperComponent } from './design-home-wrapper.component';

describe('DesignHomeWrapperComponent', () => {
  let component: DesignHomeWrapperComponent;
  let fixture: ComponentFixture<DesignHomeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignHomeWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignHomeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
