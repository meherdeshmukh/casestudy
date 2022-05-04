import { Component, OnInit } from '@angular/core';
import { ControlCenterService } from '../control-center.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss'],
})
export class DisplayTimerComponent implements OnInit {
  timerObj: { val: number | null; type: string } = {
    val: 1000,
    type: '',
  };
  timerRef: any = 'init';
  timer: number = 1000;
  lastEntered?: any;
  constructor(private controlSvc: ControlCenterService) {}
  ngOnInit(): void {
    this.controlSvc.receivedReq.subscribe(
      (val) => ((this.timerObj = val), this.manageFn())
    );
  }
  manageFn(): void {
    if (this.timerObj.type === 'Start') {
      if (this.timerObj.val === null) {
        alert('Enter time limit to continue');
        return;
      }
      if (this.lastEntered !== this.timerObj.val) {
        this.timer = this.timerObj.val || 1000;
      }
      this.startTimer();
      // if (this.timerRef === 'init' && this.timerObj.val) {
      //   this.timer = this.timerObj.val || 1000;
      //   this.startTimer();
      // } else if (this.timerRef && this.timerRef !== 'init') {
      //   clearInterval(this.timerRef);
      //   this.timerRef = null;
      // } else {
      //   this.startTimer();
      // }
    } else if (this.timerObj.type === 'Pause') {
      clearInterval(this.timerRef);
      this.timerRef = null;
    } else if (this.timerObj.type === 'Reset') {
      this.timer = 0;
      clearInterval(this.timerRef);
      // this.timerRef === 'init';
    }
    this.lastEntered = this.timerObj.val;
  }

  startTimer() {
    if (this.timerRef) {
      clearInterval(this.timerRef);
    }
    this.timerRef = setInterval(() => {
      if (this.timer) {
        this.timer -= 1;
      } else {
        this.controlSvc.notifyExpired.next(true);
        clearInterval(this.timerRef);
      }
    }, 1000);
  }
}
