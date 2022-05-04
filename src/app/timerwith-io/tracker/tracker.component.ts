import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  @Input() counts: { start: number; pause: number } = { start: 0, pause: 0 };
  constructor() {}

  ngOnInit(): void {}
}
