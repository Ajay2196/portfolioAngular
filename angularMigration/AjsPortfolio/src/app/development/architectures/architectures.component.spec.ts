import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitecturesComponent } from './architectures.component';

describe('ArchitecturesComponent', () => {
  let component: ArchitecturesComponent;
  let fixture: ComponentFixture<ArchitecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitecturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
