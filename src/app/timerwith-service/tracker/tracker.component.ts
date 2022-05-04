import { Component, OnInit } from '@angular/core';
import { ControlCenterService } from '../control-center.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  counts: { start: number; pause: number } = { start: 0, pause: 0 };
  constructor(private controlSvc: ControlCenterService) {}

  ngOnInit(): void {
    this.controlSvc.countsObj.subscribe((a) => (this.counts = a));
  }
}
