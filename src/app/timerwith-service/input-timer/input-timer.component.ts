import { Component, OnInit } from '@angular/core';
import { ControlCenterService } from '../control-center.service';

@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss'],
})
export class InputTimerComponent implements OnInit {
  // triggeredEvent: { val: number | null; type: string } = {
  //   val: 1000,
  //   type: '',
  // };
  valEntered?: any = 1000;
  buttonType: string = 'Start';
  constructor(private controlSvc: ControlCenterService) {}

  ngOnInit(): void {
    this.controlSvc.notifyExpired.subscribe((expired) => {
      if (expired) {
        alert('Timer Expired');
        this.registerEvt('Reset');
      }
    });
  }

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
    this.controlSvc.triggeredChanges.next(triggerEvent);
  }
}
