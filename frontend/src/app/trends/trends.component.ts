import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-trends',
  // templateUrl: './trends.component.html',
  template: `<div class=" carouselContainer" style="height:63%;" id="show">
      <app-carousel></app-carousel>
      </div>
      <div style="height:3%; width: 100%"><span></span></div>
      <div style="height:30%; overflow:hidden; width: 100%">
        <app-bottom-ads></app-bottom-ads>
      </div>
  `,
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  public carouselOne: NguCarousel;

  constructor() { }

  ngOnInit() {


    }
}
