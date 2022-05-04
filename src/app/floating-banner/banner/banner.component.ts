import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  floatingText: string = '';
  @Input() nestedL: number = 8;
  constructor() {}

  ngOnInit(): void {}
}
