import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataList = [];
  tempArr = [];
  constructor() {}

  ngOnInit() {
    this.dataList = Data;
    this.tempArr = Data;
  }

  filterName(event: any) {
    let filterValue = event.target.value;
    console.log(filterValue);
    let arr = this.tempArr.filter((item) => {
      return item?.name?.toLowerCase().includes(filterValue.toLowerCase());
    });
    this.dataList = arr;
  }

  sortFunc(type, key) {
    function filterArr(key, type) {
      const sortOrder = type === 'ASC' ? 1 : -1;
      return (a, b) => {
        const A = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
        const B = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
        if (A < B) {
          console.log(sortOrder * -1);
          return sortOrder * -1;
        } else if (A > B) {
          return sortOrder * 1;
        } else {
          return 0;
        }
      };
    }
    this.dataList.sort(filterArr(key, type));
    this.dataList = this.dataList;
  }
}
