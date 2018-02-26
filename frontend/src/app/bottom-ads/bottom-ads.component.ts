import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bottom-ads',
  templateUrl: './bottom-ads.component.html',
  styleUrls: ['./bottom-ads.component.css']
})
export class BottomAdsComponent implements OnInit {
  slides = [
    {url: '../assets/images/nav-elements/pepsi.png'},
    {url: '../assets/images/nav-elements/Aiico.png'},
    {url: '../assets/images/nav-elements/daimond.png'}
  ];
  constructor() { }

  ngOnInit() {
        $('#slideshow > div:gt(0)').hide();
        setInterval(function() {
          $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        }, 3000);

  }


}
