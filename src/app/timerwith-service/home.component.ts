import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ControlCenterService } from './control-center.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  receivedReq: { val: number | null; type: string } = {
    val: 1000,
    type: '',
  };
  countsObj: { start: number; pause: number } = { start: 0, pause: 0 };
  trackArray: string[] = [];
  constructor(
    private datePipe: DatePipe,
    private controlSvc: ControlCenterService
  ) {}

  ngOnInit(): void {
    this.controlSvc.triggeredChanges.subscribe((a) => this.handleEvent(a));
    this.controlSvc.notifyExpired.subscribe((isExpires) => {
      if (isExpires) {
        this.trackArray.push(
          'Timer expired at ' +
            this.datePipe.transform(new Date(), 'dd-MM-yyyy h:mm:ss a')
        );
        this.controlSvc.trackArray.next(this.trackArray);
      }
    });
  }
  handleEvent(e: any) {
    this.controlSvc.receivedReq.next(e);
    //this.receivedReq = e;
    if (e.type === 'Start' && e.val !== null) {
      this.countsObj.start += 1;
      this.trackArray.push(
        'Started at ' +
          this.datePipe.transform(new Date(), 'dd-MM-yyyy h:mm:ss a')
      );
    } else if (e.type === 'Pause') {
      this.countsObj.pause += 1;
      this.trackArray.push(
        'Paused at ' +
          this.datePipe.transform(new Date(), 'dd-MM-yyyy h:mm:ss a')
      );
      //this.datePipe.transform()
    } else {
      this.countsObj = { start: 0, pause: 0 };
      this.trackArray = [];
    }
    this.controlSvc.trackArray.next(this.trackArray);
    this.controlSvc.countsObj.next(this.countsObj);
  }
}
