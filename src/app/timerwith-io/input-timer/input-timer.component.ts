import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss'],
})
export class InputTimerComponent implements OnInit {
  @Output() triggeredEvent: EventEmitter<{ val: number | null; type: string }> =
    new EventEmitter();
  // triggeredEvent: { val: number | null; type: string } = {
  //   val: 1000,
  //   type: '',
  // };
  valEntered?: any = 1000;
  buttonType: string = 'Start';
  constructor() {}

  ngOnInit(): void {}

  registerEvt(type: string) {
    let triggerEvent: { val: number | null; type: string } = {
      val: 1000,
      type: '',
    };
    if (type === 'Start') {
      if (this.valEntered) {
        this.buttonType = 'Pause';
        triggerEvent = {
          val: this.valEntered,
          type,
        };
      } else {
        triggerEvent = {
          val: null,
          type,
        };
      }
    } else if (type === 'Pause') {
      this.buttonType = 'Start';
      triggerEvent = { val: this.valEntered, type };
    } else {
      this.buttonType = 'Start';
      triggerEvent = { val: this.valEntered, type };
      this.valEntered = null;
    }
    this.triggeredEvent.emit(triggerEvent);
  }
}
