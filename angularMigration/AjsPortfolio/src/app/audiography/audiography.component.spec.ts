import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiographyComponent } from './audiography.component';

describe('AudiographyComponent', () => {
  let component: AudiographyComponent;
  let fixture: ComponentFixture<AudiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
