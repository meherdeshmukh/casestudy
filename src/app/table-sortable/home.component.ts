import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  response: {}[] = marksJSON;
  unModifiedRes: {}[] = [...this.response];
  headers: string[] = ['Name', 'Class', 'Section', 'Sub1', 'Sub2', 'Sub3'];
  sortObj: { col: string; order: string } = { col: '', order: '' };
  constructor() {}

  ngOnInit(): void {
    this.headers = Object.keys(this.response[0]);
  }
  getValues(str: any) {
    return Object.values(str);
  }

  sortColumn(colName: string) {
    if (colName === this.sortObj.col) {
      if (this.sortObj.order === 'desc') {
        this.response = [...this.unModifiedRes];
        this.sortObj.col = '';
        this.sortObj.order = '';
        return;
      } else {
        this.sortObj.order = 'desc';
        this.response = this.sort(this.sortObj.order, colName);
      }
    } else {
      this.sortObj.col = colName;
      this.sortObj.order = 'asc';
      this.response = this.sort(this.sortObj.order, colName);
    }
  }

  sort(order: string, colName: string) {
    return this.response.sort((a: any, b: any) => {
      let nameA = a[colName];
      let nameB = b[colName];
      if (typeof a[colName] == 'string') {
        nameA = a[colName].toUpperCase();
        nameB = b[colName].toUpperCase();
      }
      if (order === 'asc' ? nameA < nameB : nameA > nameB) {
        return -1;
      }
      if (order === 'asc' ? nameA > nameB : nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }
}

const marksJSON = [
  {
    Name: 'Raj',
    Class: 3,
    Section: 'D',
    Sub1: 23,
    Sub2: 53,
    Sub3: 65,
  },
  {
    Name: 'Logesh',
    Class: 3,
    Section: 'A',
    Sub1: 27,
    Sub2: 51,
    Sub3: 71,
  },
  {
    Name: 'Jay',
    Class: 3,
    Section: 'E',
    Sub1: 25,
    Sub2: 39,
    Sub3: 55,
  },
  {
    Name: 'Kiran',
    Class: 3,
    Section: 'B',
    Sub1: 34,
    Sub2: 42,
    Sub3: 58,
  },
  {
    Name: 'Ram',
    Class: 3,
    Section: 'C',
    Sub1: 38,
    Sub2: 44,
    Sub3: 68,
  },
  {
    Name: 'Virat',
    Class: 3,
    Section: 'E',
    Sub1: 29,
    Sub2: 47,
    Sub3: 75,
  },
];
