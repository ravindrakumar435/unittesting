import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;
  let buttonElement: HTMLButtonElement;
  let spanElement: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
      buttonElement = fixture.nativeElement.querySelector('button');
    spanElement = fixture.nativeElement.querySelector('span');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle switch state on button click', () => {
    // Initial state should be off
    expect(component.switchState).toBe(false);
    expect(spanElement.textContent).toBe('Off');

    // Simulate button click
    buttonElement.click();
    fixture.detectChanges();

    // After first click, state should be on
    expect(component.switchState).toBe(true);
    expect(spanElement.textContent).toBe('On');

    // Simulate button click again
    buttonElement.click();
    fixture.detectChanges();

    // After second click, state should be off again
    expect(component.switchState).toBe(false);
    expect(spanElement.textContent).toBe('Off');
  });

  

});
