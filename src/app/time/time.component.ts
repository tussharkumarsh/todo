import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  experience = [
    {
      heading: ['Project Completed'],
      discription: ['10'],
    },
    {
      heading: ['Total years experience'],
      discription: ['10'],
    },
    {
      heading: ['Ongoing Projects'],
      discription: ['10'],
    },
  ];
  counter = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.intializeCounter();
  }

  intializeCounter() {
    this.interval = setInterval(() => {
      this.counter++;
      if (this.counter === 100) {
        clearInterval(this.interval);
      }
    }, 50);
  }
}
