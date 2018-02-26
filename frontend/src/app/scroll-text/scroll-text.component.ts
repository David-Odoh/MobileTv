import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent implements OnInit {
  scrollingText = ` A senior government official named Nirav
   Modi as a leading suspect at a news conference on
    Thursday after investigators raided properties
     belonging to the celebrity jeweler and seized
      assets worth more than $200 million.
       `;

  constructor() {

}
ngOnInit() {

}
}