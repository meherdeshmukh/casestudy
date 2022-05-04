import { Component, OnInit } from '@angular/core';
import { ControlCenterService } from '../control-center.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  logCollection: string[] = [];

  constructor(private controlSvc: ControlCenterService) {}

  ngOnInit(): void {
    this.controlSvc.trackArray.subscribe((a) => (this.logCollection = a));
  }
}
