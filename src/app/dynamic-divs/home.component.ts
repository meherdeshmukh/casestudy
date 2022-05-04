import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  availDivs = new Array(25);
  constructor() {}

  ngOnInit(): void {
    const num = Math.floor(innerWidth / 220);
    addEventListener('scroll', ($event) => {
      const scrollH = document.documentElement.scrollHeight - innerHeight;
      if (scrollH === Math.ceil(scrollY)) {
        const newA = new Array(num);
        //alert('hjhj---' + newA.length);
        this.availDivs.push(...newA);
        //this.availDivs = [...this.availDivs, new Array(num)];
      }
    });
  }

  displaySelected(index: number) {
    // alert(index + 1);
    alert('Button ' + (index + 1) + ' is clicked');
  }
}
