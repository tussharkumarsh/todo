import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  mySlideImages = [
    '../assets/img/image1.png',
    '../assets/img/image2.png',
    '../assets/img/image3.png',
  ];
  myCarouselImages = [];

  employees = ['Tushar', 'Ashish', 'Sagar'];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor() {}

  ngOnInit(): void {}
}
