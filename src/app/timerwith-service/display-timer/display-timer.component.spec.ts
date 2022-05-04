import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimerComponent } from './display-timer.component';

describe('DisplayTimerComponent', () => {
  let component: DisplayTimerComponent;
  let fixture: ComponentFixture<DisplayTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
